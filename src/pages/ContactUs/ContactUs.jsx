import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaRegPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!", { icon: "👌" });
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <section className="max-w-screen-sm mx-auto my-10">
        <form onSubmit={handleSubmit} className="p-5 shadow-md rounded-md">
          <h3 className="divider font-semibold text-neutral-800">Contact Us</h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">
              <FaRegPaperPlane />
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
