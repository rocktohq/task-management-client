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
  const [toDo, setToDo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const statuses = ["to-do", "ongoing", "completed"];

  const {
    data: todos,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks?email=${user?.email}`);
      setToDo(res.data.tasks.filter((todo) => todo?.status === "to-do"));
      setOnGoing(res.data.tasks.filter((todo) => todo?.status === "ongoing"));
      setCompleted(
        res.data.tasks.filter((todo) => todo?.status === "completed")
      );

      return res.data.tasksCount;
    },
  });

  if (isPending) return <Loader />;

  return (
    <DndProvider backend={HTML5Backend}>
      <Helmet>
        <title>All Todos</title>
      </Helmet>
      <Title heading="All Todos" center big />
      {todos > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {statuses.map((status, idx) => (
            <Section
              key={idx}
              status={status}
              toDo={toDo}
              onGoing={onGoing}
              completed={completed}
              refetch={refetch}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <h2 className="text-center text-xl font-bold text-neutral-500">
            No To-do Found!
          </h2>
        </div>
      )}
    </DndProvider>
  );
};

export default TodoList;
