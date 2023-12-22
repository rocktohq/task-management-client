import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Client1 from "../../../assets/images/client1.jpg";
import Client2 from "../../../assets/images/client2.jpg";
import Client3 from "../../../assets/images/client3.jpg";
import Client4 from "../../../assets/images/client4.jpg";
import StarRatings from "react-star-ratings";
import Title from "../../shared/Title";

const Reviews = () => {
  return (
    <div className="py-20">
      <Title
        heading="User Reviews"
        subHeading="What Our Users Say"
        center
        big
      />
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 items-center p-5">
            <img
              className="lg:w-48 lg:h-48 rounded-md lg:rounded-full"
              src={Client1}
              alt=""
            />
            <div>
              <h3 className="font-semibold">Jason Backer</h3>
              <p>Absolutely Phenomenal Service! Tasker makes my life easy..</p>
              <StarRatings
                rating={4.5}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="#fc7914"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 items-center p-5">
            <img
              className="lg:w-48 lg:h-48 rounded-md lg:rounded-full"
              src={Client2}
              alt=""
            />
            <div>
              <h3 className="font-semibold">Johny Depp</h3>
              <p>Incredible Experience! Tasker managed my todos flawlessly.</p>
              <StarRatings
                rating={4.8}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="#fc7914"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 items-center p-5">
            <img
              className="lg:w-48 lg:h-48 rounded-md lg:rounded-full"
              src={Client3}
              alt=""
            />
            <div>
              <h3 className="font-semibold">Amelia Lottie</h3>
              <p>Tasker delivers exceptional service.</p>
              <StarRatings
                rating={5}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="#fc7914"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5 items-center p-5">
            <img
              className="lg:w-48 lg:h-48 rounded-md lg:rounded-full"
              src={Client4}
              alt=""
            />
            <div>
              <h3 className="font-semibold">Nicolas Watson</h3>
              <p>
                Best Decision Ever! Using Tasker is the best decision we made.
              </p>
              <StarRatings
                rating={4.7}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="#fc7914"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
