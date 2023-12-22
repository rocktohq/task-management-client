import { Helmet } from "react-helmet-async";
import { FaPencilAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { timestampToDate } from "../../../utils/time";
import Loader from "../../../components/shared/Loader";

const UpdateTodo = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const {
    data: todo = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/${id}?email=${user?.email}`);
      return res.data;
    },
  });

  const navigate = useNavigate();

  if (isPending) return <Loader />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    const description = form.description.value;
    const task = { title, deadline, priority, description };

    const res = await axiosSecure.put(
      `/tasks/${id}?email=${user?.email}`,
      task
    );
    if (res?.data?.modifiedCount > 0) {
      toast.success("Todo updated successfully");
      refetch();
      navigate("/dashboard/todolist");
    } else {
      return toast.error("Something went wrong!");
    }

    console.log(task);
  };

  return (
    <div>
      <Helmet>
        <title>Update Todo</title>
      </Helmet>
      <section className="max-w-screen-sm mx-auto my-10">
        <form onSubmit={handleSubmit} className="p-5 shadow-md rounded-md">
          <h3 className="divider font-semibold text-neutral-800">
            Update Todo
          </h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Todo Title</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="Todo Title"
              defaultValue={todo?.title}
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                name="deadline"
                type="date"
                defaultValue={timestampToDate(todo?.deadline)}
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                name="priority"
                className="select select-bordered focus:outline-none w-full"
              >
                <option disabled value="">
                  Select Priority
                </option>
                <option defaultValue={todo?.priority}>{todo?.priority}</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Todo Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24 focus:outline-none"
              placeholder="Write your todo description here..."
              defaultValue={todo?.description}
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">
              <FaPencilAlt />
              Update Todo
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateTodo;
