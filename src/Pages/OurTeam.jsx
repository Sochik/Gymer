import React, { useEffect } from "react";
import { kettle } from "../assets/images";
import { Link } from "react-router-dom";
import { teamMembers } from "../Data/itemsData";
import { LiaEnvelope, LiaFacebook, LiaInstagram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";

export default function OurTeam() {
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
            Our Team
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
              to={"/team"}
              className="p-2 font-bold text-primary transition-all duration-300"
            >
              Our Team
            </Link>
          </div>
        </div>
      </div>

      <div className="container md:px-14 lg:px-24 w-full h-full flex flex-col items-center justify-center z-20 bg-secondary">
        <div className="w-full h-auto flex flex-col items-start px-4 py-12 justify-center">
          <h2 className="text-md font-bold text-primary font-muli uppercase text-center mt-10">
            Our Team
          </h2>
          <p className="text-light font-oswald text-3xl  font-bold uppercase text-start mt-4">
            Meet the Experts Behind Our Success
          </p>
        </div>
        <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 mb-16 px-4 gap-4 items-center justify-center bg-secondary z-20">
          {teamMembers.map((card, index) => (
            <div
              key={index}
              className="relative w-auto h-auto flex z-20 bg-primary items-center justify-center"
            >
              <div
                className="relative overflow-hidden text-white group h-[60vh] md:h-[75vh] w-full flex flex-col justify-end bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="w-full h-2/6 md:h-1/3 px-2 md:p-6 items-center translate-y-48 transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:flex flex-col group-hover:md:flex-row justify-between bg-backdrop group-hover:after:absolute group-hover:after:min-h-28 group-hover:after:z-20 group-hover:after:bg-backdrop group-hover:after:mt-1 group-hover:after:-top-6 group-hover:after:-left-0 group-hover:after:w-full group-hover:after:-skew-y-6 group-hover:after:border-t-4 group-hover:after:border-dark">
                  <div className="flex z-30 flex-col items-center md:items-start justify-center md:gap-2 gap-1">
                    <p className="text-sm font-muli font-semibold uppercase text-primary">
                      {card.category}
                    </p>
                    <h3 className="text-light font-oswald text-xl font-bold uppercase text-center">
                      {card.name}
                    </h3>
                    {/* Social Media Icons */}
                    <ol className="flex items-center justify-center gap-1">
                      {[
                        { icon: <LiaInstagram />, to: "/team" },
                        { icon: <LiaFacebook />, to: "/team" },
                        {
                          icon: <FaXTwitter className="text-md" />,
                          to: "/team",
                        },
                        { icon: <LiaEnvelope />, to: "/team" },
                      ].map((link, idx) => (
                        <li
                          key={idx}
                          className="text-light hover:text-primary text-lg font-thin p-1 transition-colors duration-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          <Link to={link.to}>{link.icon}</Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <Link
                    to={`/trainer/${encodeURIComponent(card.name)}`}
                    className="font-oswald px-2 z-30 md:px-7 py-1 my-2 font-bold bg-inherit transition-all text-center border-2 border-primary  text-light flex items-center justify-center"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
