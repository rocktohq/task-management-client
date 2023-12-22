import { Helmet } from "react-helmet-async";
import Title from "../../components/shared/Title";
import Container from "../../components/shared/Container";

const WhyUs = () => {
  return (
    <Container className="py-10">
      <Helmet>
        <title>Why Choose Us</title>
      </Helmet>
      <Title
        heading="Benefits of Our Collaborative Task Management Platform"
        subHeading="Embrace efficiency, collaboration, and organization with our collaborative task management platform. No matter your profession, our platform is designed to elevate your workflow and simplify the way you manage tasks."
        center
        big
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="p-5 shadow-md">
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="text-neutral-500">
            Streamline your project workflows with our intuitive task management
            platform designed specifically for developers. Plan sprints, track
            progress, and collaborate seamlessly with your team in real-time.
            Enjoy a centralized hub for code reviews, bug tracking, and project
            documentation, enhancing overall development efficiency.
          </p>
        </div>
        <div className="p-5 shadow-md">
          <h2 className="text-2xl font-bold">For Corporate Professionals</h2>
          <p className="text-neutral-500">
            Efficiency is key in the corporate world. Our platform empowers
            professionals to manage tasks, deadlines, and projects efficiently.
            Improve team coordination, reduce email clutter, and enhance
            productivity with features like real-time updates, task assignment,
            and progress tracking—all in one place.
          </p>
        </div>
        <div className="p-5 shadow-md">
          <h2 className="text-2xl font-bold">For Bankers</h2>
          <p className="text-neutral-500">
            In the finance sector, precision and organization are paramount. Our
            task management platform provides a secure and structured
            environment for bankers to manage financial tasks, compliance
            deadlines, and collaborative projects. Ensure regulatory compliance,
            streamline audit processes, and enhance communication within your
            financial team.
          </p>
        </div>
        <div className="p-5 shadow-md">
          <h2 className="text-2xl font-bold">For Entrepreneurs</h2>
          <p className="text-neutral-500">
            Entrepreneurs juggle numerous responsibilities. Our platform
            simplifies task management, allowing entrepreneurs to focus on
            business growth. Prioritize tasks, delegate efficiently, and track
            progress effortlessly. With a clear overview of your projects, you
            can make informed decisions and drive your business forward.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
