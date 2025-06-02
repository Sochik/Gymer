import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { teamMembers } from "../Data/itemsData";



export default function Team() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
        spaceBetween={30}
          loop={true}
      navigation
          pagination={{
              clickable: true,
          el: ".custom-pagination",}}
          breakpoints={{0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="w-full h-full"
    >
      {teamMembers.map((card, index) => (
        <SwiperSlide
          key={index}
          className="w-auto h-full flex items-center justify-center"
        >
          <div
            className="relative overflow-hidden bg-black text-white group h-[75vh] w-full flex flex-col justify-end bg-cover bg-center"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="relative w-full h-1/3 p-6 translate-y-96 transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:flex justify-between bg-backdrop items-start group-hover:after:absolute group-hover:after:min-h-28 group-hover:after:z-10 group-hover:after:bg-backdrop group-hover:after:mt-1 group-hover:after:-top-6 group-hover:after:-left-0 group-hover:after:w-full group-hover:after:-skew-y-6 group-hover:after:border-t-4 group-hover:after:border-dark">
              <div className="flex z-20 flex-col items-start gap-2 mb-4">
                <p className="text-center text-sm font-muli font-semibold uppercase text-primary">
                  {card.category}
                </p>
                <h3 className="text-light font-oswald text-xl font-bold uppercase text-center">
                  {card.name}
                </h3>
              </div>
              <Link
                to="/"
                className="mt-3 px-2 font-oswald z-20 md:px-7 py-2 font-bold bg-inherit transition-all text-center border-2 border-primary  text-light flex items-center justify-center"
              >
                Book
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
          <div className="custom-pagination flex gap-2 justify-center my-6"></div>
    </Swiper>
  );
}
