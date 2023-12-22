import PropTypes from "prop-types";
import Task from "./Task";
import { useDrop } from "react-dnd";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
const Section = ({
  status,
  toDo,
  onGoing,
  completed,
  refetch,
}) => {
  let text = "To Do";
  let bg = "bg-slate-500";
  let tasksToMap = toDo;

  if (status === "ongoing") {
    text = "On Going";
    bg = "bg-primary";
    tasksToMap = onGoing;
  }
  if (status === "completed") {
    text = "Completed";
    bg = "bg-success";
    tasksToMap = completed;
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addTaskToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const addTaskToSection = async (id) => {
    const res = await axiosSecure.put(`/tasks/${id}?email=${user?.email}`, {
      status,
    });

    if (res?.data?.modifiedCount > 0) {
      refetch();
    }
  };

  return (
    <div ref={drop} className={`${isOver ? "bg-gray-50" : ""}`}>
      <h2
        className={`py-2 text-center text-2xl font-bold ${bg} text-white px-5 w-full uppercase mb-5 rounded-md`}
      >
        {text}
      </h2>
      {tasksToMap.map((task) => (
        <Task key={task._id} task={task} refetch={refetch} />
      ))}
    </div>
  );
};

export default Section;
Section.propTypes = {
  status: PropTypes.string,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  toDo: PropTypes.array,
  onGoing: PropTypes.array,
  completed: PropTypes.array,
  refetch: PropTypes.func,
};
