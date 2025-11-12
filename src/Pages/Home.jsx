import { useEffect, } from "react";
import Slider from "../Components/Slider";
import { classes, packages, plans } from "../Data/itemsData";
import { Link } from "react-router-dom";
import { asideimg } from "../assets/images";
import Team from "../Components/Team";
import Gallery from "../Components/Gallery";
import Services from "../Components/Services";
import SectionHeader from "../Components/SectionHeader";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="">
        <Slider />
      </section>

      <section className="container mx-auto bg-backdrop px-4 md:px-14 lg:px-24">
        <div className="flex flex-col gap-2 items-center pt-32 pb-24 justify-center ">
          <SectionHeader
            title="WHY CHOOSE US?"
            subtitle="PUSHING YOUR LIMITS FORWARD"
          />
          <Services />
        </div>
      </section>

      <section className=" mx-auto py-10 bg-secondary px-4 md:px-14 lg:px-24">
        <div className="container flex flex-col gap-2 items-center pt-32 pb-24 justify-center ">
          <SectionHeader
            title="OUR CLASSES"
            subtitle="WHAT WE CAN OFFER"
          />
        </div>
        <div className="flex flex-col md:grid-cols-3 md:grid items-center justify-center gap-8">
          {classes.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-end items-center w-full bg-white h-96 md:h-[28rem] overflow-hidden group"
            >
              <div className="inset-0 w-full h-full object-cover z-0 transition-transform duration-300  group-hover:scale-105 after:absolute after:min-h-28 after:w-full after:z-10 after:bg-backdrop after:mt-1 after:top-60 after:-skew-y-6 after:border-t-4 after:border-dark">
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
      </section>

      <section
        className="bg-cover bg-center h-full flex items-center justify-center"
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
              to="/register"
              className="mt-3 px-9 md:px-12 font-oswald py-2 bg-inherit text-light border-2 border-primary font-bold rounded-md hover:bg-primary transition-all text-center items-center justify-center block w-fit"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      <section className=" mx-auto bg-secondary px-4 md:px-14 lg:px-24">
        <div className="flex flex-col gap-2 items-center pt-32 pb-24 justify-center ">
          <SectionHeader title="OUR PLANS" subtitle="FIND YOUR FIT" />
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
                    {plan.schedule}
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

      <section className="container mx-auto bg-backdrop px-4 md:px-14 lg:px-24">
        <Gallery />
      </section>

      <section className=" mx-auto bg-secondary px-4 md:px-14 lg:px-24">
        <div className="flex flex-col gap-2 items-center pt-20 pb-24 justify-center ">
          <SectionHeader
            title="MEET OUR TEAM"
            subtitle="EXPERTS IN YOUR CORNER"
          />
        </div>
        <Team />
      </section>
    </>
  );
}
