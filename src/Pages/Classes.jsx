import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { classes } from "../Data/itemsData";
import PageSectionHeader from "../Components/PageSectionHeader";
import PageHero from "../Components/PageHero";

export default function Classes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <section className="h-auto w-full bg-secondary">
        <PageHero title="Our Classes" link="/classes" />
        <div className="container w-full px-6 md:px-14 lg:px-24 h-auto gap-5 flex flex-col pb-16 mx-auto items-center justify-center">
         <PageSectionHeader title="Our Classes" subtitle="Join Our Fitness Classes" />
          <div className="flex flex-col md:grid-cols-3 md:grid items-center justify-center gap-8">
            {classes.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-end items-center w-full bg-white h-96 md:h-[28rem] overflow-hidden group"
              >
                <div className="inset-0 w-full h-full object-cover z-0 transition-transform duration-300  group-hover:scale-105 after:absolute after:min-h-28 after:w-full after:z-10 after:bg-backdrop after:mt-1 after:top-52 after:-skew-y-6 after:border-t-4 after:border-dark">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-20 w-full h-full p-6 flex justify-between bg-backdrop items-start">
                  <div className="flex flex-col items-start gap-2 mb-4">
                    <p className="text-center text-sm font-muli font-semibold uppercase text-primary">
                      {item.category}
                    </p>
                    <h3 className="text-light font-oswald text-xl font-bold uppercase text-center">
                      {item.name}
                    </h3>
                  </div>
                  <Link
                    to={`/classDetail/${item.id}`}
                    className="mt-3 px-3 md:px-6 py-2 font-bold bg-accent transition-all text-center group-hover:bg-primary h-12 w-12 text-light flex items-center justify-center"
                  >
                    &#10140;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};