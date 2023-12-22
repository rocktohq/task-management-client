import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/shared/Loader";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/shared/Title";
import { useState } from "react";
import Section from "./Section";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TodoList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCOmpleted] = useState([]);
  const statuses = ["to-do", "ongoing", "completed"];

  const { isPending, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks?email=${user?.email}`);
      setToDo(res.data.tasks.filter((todo) => todo?.status === "to-do"));
      setOnGoing(res.data.tasks.filter((todo) => todo?.status === "ongoing"));
      setCOmpleted(
        res.data.tasks.filter((todo) => todo?.status === "completed")
      );
    },
  });

  if (isPending) return <Loader />;

  return (
    <DndProvider backend={HTML5Backend}>
      <Helmet>
        <title>All Todos</title>
      </Helmet>
      <Title heading="All Todos" center big />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {statuses.map((status, idx) => (
          <Section
            key={idx}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            toDo={toDo}
            onGoing={onGoing}
            completed={completed}
            refetch={refetch}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default TodoList;
