import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { timestampToDate } from "../../../utils/time";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { stringSlicer } from "../../../utils/slicer";

const Task = ({ task, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(
          `/tasks/${id}?email=${user?.email}`
        );
        if (res.data.deletedCount > 0) {
          toast.success("Todo deleted successfully");
          refetch();
        }
      }
    });
  };

  return (
    <div
      ref={drag}
      className={`${
        isDragging ? "opacity-50" : "opacity-100"
      } shadow-md p-3 cursor-grab flex items-center gap-2`}
    >
      <div className="flex-1">
        <h3 className="font-bold">{task?.title}</h3>
        <p className="text-sm text-neutral-500">
          {stringSlicer(task?.description)}
        </p>
        <p className="text-sm text-neutral-300">
          Deadline: {timestampToDate(task?.deadline)}
        </p>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <Link to={`/dashboard/updatetodo/${task._id}`}>
          <button className="">
            <FaPencilAlt className="text-primary" size={18} />
          </button>
        </Link>
        <button onClick={() => handleDelete(task._id)} className="">
          <FaTrashAlt className="text-error" size={18} />
        </button>
      </div>
    </div>
  );
};

export default Task;
Task.propTypes = {
  task: PropTypes.object,
  refetch: PropTypes.func,
};
