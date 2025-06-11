import React, { useEffect } from "react";
import {
    asideimg,
  boxing,
  kettle,
  personalTraining,
  strength,
  yoga,
} from "../assets/images";
import { Link } from "react-router-dom";
import { packages, plans } from "../Data/itemsData";

const services = [
  {
    id: 1,
    image: personalTraining,
    title: "Personal Training",
    description: "One-on-one training sessions tailored to your fitness goals.",
  },
  {
    id: 3,
    image: boxing,
    title: "Boxing Training",
    description: "Intense boxing workouts to improve your strength and endurance.",
  },
  {
    id: 2,
    image: yoga,
    title: "Yoga & Meditation",
    description: "Relax and rejuvenate with our yoga and meditation sessions.",
  },
  {
    id: 4,
    image: strength,
    title: "Strength Training",
    description: "Build muscle and strength with our expert-led sessions.",
  },
];

// Helper to chunk array into rows of 2
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="h-auto w-full bg-secondary">
      <div
        className="container md:px-14 lg:px-24 w-full h-full flex items-center pb-6 justify-start bg-cover bg-center z-10 "
        style={{ backgroundImage: `url(${kettle})` }}
      >
        <div className="h-[65vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-light font-oswald uppercase text-center">
            Our Services
          </h1>
          <div className="flex font-muli items-center justify-center mt-6">
            <Link
              to={"/"}
              className="p-2 text-light font-bold hover:text-primary transition-all duration-300"
            >
              Back to Home
            </Link>
            <span className="text-light font-bold">|</span>
            <Link
              to={"/services"}
              className="p-2 font-bold text-primary transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="container md:px-14 lg:px-24 w-full h-full flex flex-col items-center justify-center z-20 bg-secondary">
        <div className="w-full h-auto flex flex-col items-start px-4 py-12 justify-center">
          <h2 className="text-md font-bold text-primary font-muli uppercase text-center mt-10">
            What we do
          </h2>
          <p className="text-light font-oswald text-3xl font-bold uppercase text-start mt-4">
            Pushing the Limits of Fitness
          </p>
        </div>
        <div className="w-full h-full flex flex-col mb-12 items-center justify-center">
          {chunkArray(services, 2).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="w-full flex flex-col px-4 md:flex-row md:gap-0 gap-6 md:mb-0 mb-6 items-center justify-center"
            >
              {row.map((service, colIndex) => {
                // Alternate layout per row for chessboard effect
                const isEvenRow = rowIndex % 2 === 0;
                const isLeft = colIndex === 0;
                return (
                  <div
                    key={service.id}
                    className="w-full md:w-1/2 flex-1 flex flex-col items-center justify-center"
                  >
                    <div
                      className={`w-full h-full bg-accent hover:bg-accent flex flex-col ${
                        isEvenRow ? "md:flex-row" : "md:flex-row-reverse"
                      } items-center justify-center group`}
                    >
                      <div
                        style={{ backgroundImage: `url(${service.image})` }}
                        className="w-full h-56 md:h-72 bg-cover bg-center md:flex-1"
                      ></div>
                      <div className="w-full md:flex-1 flex flex-col items-start justify-center">
                        <div className="flex flex-col font-oswald items-start p-4">
                          <h3 className="text-light font-oswald text-xl font-bold uppercase mb-2">
                            {service.title}
                          </h3>
                          <p className="text-text font-muli line-clamp-3">
                            {service.description}
                          </p>
                        </div>
                        <Link
                          to="/"
                          className="group-hover:text-primary text-light mb-4 ml-4 font-muli uppercase font-bold"
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
              </div>
          </div>
        <section
          className="container mx-auto bg-cover bg-center h-full flex items-center justify-center"
          style={{ backgroundImage: `url(${asideimg})` }}
        >
          <div className="w-full h-full px-4 md:px-14 lg:px-24 bg-secondary bg-opacity-35">
            <div className="flex flex-col w-full items-center justify-center py-24 md:py-48 h-full">
              <h2 className="text-3xl md:text-5xl font-oswald text-light font-semibold text-center uppercase pb-4">
                Register to start your journey of fitness and strength
              </h2>
              <p className="text-text text-center md:text-center text-xl font-bold font-muli uppercase pb-4">
                where health, beauty and fitness meet.
              </p>
              <Link
                to="/about"
                className="mt-3 px-9 md:px-12 font-oswald py-2 bg-inherit text-light border-2 border-primary font-bold rounded-md hover:bg-primary transition-all text-center items-center justify-center block w-fit"
              >
                Register
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-secondary px-4 md:px-14 lg:px-24">
          <div className="flex flex-col gap-2 items-center pt-32 pb-24 justify-center ">
            <span className="text-xl md:text-2xl font-bold font-gaegu text-primary text-center uppercase">
              Our Plan
            </span>
            <h2 className="text-3xl md:text-5xl font-oswald text-light font-semibold text-center uppercase">
              Choose Your Pricing Plan
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {plans.map((plan) => {
              const pack = packages.find((p) => p.id === plan.package);
              return (
                <div
                  key={plan.id}
                  className="flex transform w-full -skew-y-6 font-oswald justify-center items-center border-2 border-text p-10 pb-14 mx-6 mb-8 group hover:bg-light transition-all duration-300 ease-in"
                >
                  <div className="transform skew-y-6 w-full items-center flex flex-col gap-2 ">
                    <h2 className="text-center text-light group-hover:text-secondary text-3xl font-semibold mb-2">
                      {plan.name}
                    </h2>
                    <p className="text-center text-primary text-7xl font-bold">
                      &#8358;{plan.amount}
                    </p>
                    <p className="text-center text-sm font-muli group-hover:text-accent mb-6 mt-3 font-semibold uppercase text-text">
                      {plans.schedule}
                    </p>
                    <div>
                      {pack && (
                        <ul
                          key={pack.id}
                          className="space-y-2 text-center text-base font-muli group-hover:text-accent text-text"
                        >
                          <li>{pack.itemone}</li>
                          <li>{pack.itemtwo}</li>
                          <li>{pack.itemthree}</li>
                          <li>{pack.itemfour}</li>
                          <li>{pack.itemfive}</li>
                          <li>{pack.itemsix}</li>
                        </ul>
                      )}
                    </div>
                    <Link
                      to="/about"
                      className="mt-3 px-3 md:px-6 py-2 font-muli uppercase font-bold text-sm rounded-md bg-accent transition-all text-center items-center justify-center block w-[50vw] md:w-[16vw] group-hover:bg-primary text-light"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      
    </section>
  );
}
