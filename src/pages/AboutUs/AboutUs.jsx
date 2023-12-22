import Container from "../../components/shared/Container";
import Title from "../../components/shared/Title";
import Map from "./Map";
import aboutImage from "../../assets/images/about.webp";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <Container className={`py-10 bg-slate-50`}>
      <Helmet>
        <title>mNews - About Us</title>
      </Helmet>
      <Title
        heading={`About Us`}
        subHeading={`Learn all about Us`}
        big
        center
      />
      <div className="mt-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-5">
        <div className="lg:w-1/2">
          <Title
            heading={`We are the helping hands to manage your tasks`}
          ></Title>
          <div className="mt-10">
            <p className="text-neutral-500">
              Embrace efficiency, collaboration, and organization with our
              collaborative task management platform. No matter your profession,
              our platform is designed to elevate your workflow and simplify the
              way you manage tasks.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="w-full lg:h-96 object-cover" src={aboutImage} />
        </div>
      </div>

      <div className="mt-10">
        <Map />
      </div>
    </Container>
  );
};

export default AboutUs;
