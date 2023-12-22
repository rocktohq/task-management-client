import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddTodo = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const task = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      dateAdded: Date.now(),
      deadline: new Date(data.deadline).getTime(),
      status: "to-do",
      author: {
        email: user?.email,
      },
    };
    const res = await axiosSecure.post(`/tasks?email=${user?.email}`, task);
    if (res?.data?.insertedId) {
      return toast.success("Todo added successfully");
    } else {
      return toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Todo</title>
      </Helmet>
      <section className="max-w-screen-sm mx-auto my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-5 shadow-md rounded-md"
        >
          <h3 className="divider font-semibold text-neutral-800">Add Todo</h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Todo Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Todo Title"
              className="input input-bordered focus:outline-none w-full"
            />
            {errors.title && <p className="text-error">Title is required.</p>}
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                {...register("deadline", { required: true })}
                type="date"
                className="input input-bordered focus:outline-none w-full"
              />
              {errors.deadline && (
                <p className="text-error">Deadline is required.</p>
              )}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                {...register("priority", { required: true })}
                className="select select-bordered focus:outline-none w-full"
              >
                <option disabled value="">
                  Select Priority
                </option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
              </select>
              {errors.priority && (
                <p className="text-error">Priority is required.</p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Todo Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered h-24 focus:outline-none"
              placeholder="Write your todo description here..."
            ></textarea>
            {errors.description && (
              <p className="text-error">Description is required.</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">
              <FaPlus />
              Add Todo
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTodo;
