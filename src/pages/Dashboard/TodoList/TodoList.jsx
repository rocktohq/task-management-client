import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/shared/Loader";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/shared/Title";
import { timestampToDate } from "../../../utils/time";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TodoList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const {
    data: todos = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["todos", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure(
        `/tasks?email=${user?.email}&page=${currentPage}&size=${itemsPerPage}`
      );
      setCount(res.data.tasksCount);
      return res.data.tasks;
    },
  });

  if (isPending) return <Loader />;

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

  // Pagination
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Helmet>
        <title>All Todos</title>
      </Helmet>
      <Title heading="All Todos" center big />
      <div className="mt-5 overflow-x-auto ">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Added</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <tr key={todo._id}>
                  <td>{index + 1}</td>
                  <td>{todo?.title}</td>
                  <td>{todo?.description}</td>
                  <td>{timestampToDate(todo?.dateAdded)}</td>
                  <td>{timestampToDate(todo?.deadline)}</td>
                  <td>{todo?.priority}</td>
                  <td>{todo?.status || "To-do"}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(todo._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt className="text-error" size={18} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="p-5 shadow w-fit rounded-xl mt-10 mx-auto">
        <p className="mb-3">
          Current Page: <span className="font-semibold">{currentPage + 1}</span>{" "}
        </p>
        <div className="space-x-3">
          <button onClick={handlePrevPage}>Prev</button>
          {pages.map((page) => (
            <button
              className={`${
                currentPage === page ? "btn-secondary" : "btn-primary"
              } btn btn-sm rounded`}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
            className="border px-3 py-2 rounded"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
