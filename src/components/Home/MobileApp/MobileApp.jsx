import Container from "../../shared/Container";
import Title from "../../shared/Title";
import todoListImage from "../../../assets/images/to-do-list.jpg";
import appStore from "../../../assets/images/appstore.png";
import playStore from "../../../assets/images/playstore.png";

const MobileApp = () => {
  return (
    <Container className="py-20 bg-cyan-50">
      <Title
        heading={"Manage Task Smoothly"}
        subHeading={"Download Mobile Apps!"}
        big
        center
      />
      <div className="flex flex-col md:flex-row gap-5 mt-5 md:justify-between md:items-center">
        <div className="md:w-1/2">
          <div className="space-y-2 mb-10">
            <h3 className="text-xl font-semibold">
              No more worries about managing tasks
            </h3>
            <p className="text-neutral-600">
              All the power is on your hand. Just download our mobile
              applocation and enjoy!
            </p>
          </div>
          <div className="space-y-2">
            <img className="md:h-3/5 md:w-3/5" src={appStore} alt="AppStore" />
            <img
              className="md:h-3/5 md:w-3/5"
              src={playStore}
              alt="PlayStore"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="" src={todoListImage} alt="NewsApp" />
        </div>
      </div>
    </Container>
  );
};

export default MobileApp;
