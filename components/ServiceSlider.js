// icons
import {
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import {
  FaHtml5,
  FaWordpress,
} from "react-icons/fa";

import {
  SiCoinmarketcap
} from "react-icons/si";

// data
const serviceData = [
  {
    icon: <SiCoinmarketcap />,
    title: "Branding & Marketing",
    description: "work hand in hand to drives business growth.",
  },
  {
    icon: <FaHtml5 />,
    title: "Front end Development",
    description: "building the user-facing aspects of web applications.",
  },
  {
    icon: <FaWordpress />,
    title: "Wordpress Development",
    description: "I develop wordpress them and plugin",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "increasing websites visibility and ranking on search.",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col
            gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icons */}
              <div className="tex-4xl text-accent mb-4">
                {item.icon}</div>

              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent 
                transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
