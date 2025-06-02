import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { heroimg1, heroimg2, } from "../assets/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Slider() {
  const images = [
    {
      id: 1,
      image: heroimg2,
      title: (
        <div className="flex flex-col justify-start gap-10 z-10 bg-transparent text-light font-muli p-4 text-start md:text-left w-full">
          <h2 className="font-thin  text-lg md:text-2xl">MUSCLE POWER </h2>
          <p className=" font-bold text-lg font-oswald md:text-6xl leading-9">
            BE{" "}
            <strong className=" text-primary md:inline-block text-2xl md:text-8xl md:py-4 font-extrabold">
              STRONG{" "}
            </strong>
            <br className="hidden md:block" />
            TRAINING HARD
          </p>
          <Link
            to="/about"
            className="mt-3 px-3 md:px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-highlight transition-all text-center items-center justify-center block w-fit hover:bg-inherit border-2 border-primary"
          >
            Get Info
          </Link>
        </div>
      ),
    },
    {
      id: 2,
      image: heroimg1,
      title: (
        <div className="flex flex-col justify-start gap-10 z-10 bg-transparent text-light font-muli p-4 text-start md:text-left w-full">
          <h2 className="font-thin  text-lg md:text-2xl">SHAPE YOUR BODY </h2>
          <p className=" font-bold text-lg font-oswald md:text-6xl leading-9">
            LOOK{" "}
            <strong className=" text-primary md:inline-block text-2xl md:text-8xl md:py-4 font-extrabold">
              PERFECT{" "}
            </strong>
            <br className="hidden md:block" />
            AND CONFIDENT
          </p>
          <Link
            to="/about"
            className="mt-3 px-3 md:px-6 py-2 bg-inherit text-primary border-2 border-primary font-bold rounded-md hover:bg-primary hover:text-light transition-all text-center items-center justify-center block w-fit"
          >
            Get Info
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="slider">
      <Swiper
        className="w-full h-[75vh] md:h-[130vh]"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        el: ".custom-pagination",
        }}
        autoplay={{ delay: 5000 }}
      >
        {images.map((item) => (
          <SwiperSlide
            key={item.id}
            className="container md:px-14 lg:px-24 w-full h-full flex items-center pb-6 justify-start bg-cover bg-center z-10 "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="">{item.title}</div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination flex gap-2 justify-center"></div>
      </Swiper>
    </div>
  );
}
