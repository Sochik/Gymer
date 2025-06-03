import React from "react";
import { kettle } from "../assets/images";
import { Link } from "react-router-dom";
import { MdMyLocation } from "react-icons/md";
import {
  FaEnvelope,
  FaMapLocation,
  FaMapLocationDot,
  FaMobile,
  FaSquarePhone,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="h-auto w-full bg-secondary">
      <div
        className="container md:px-14 lg:px-24 w-full h-full flex items-center pb-6 justify-start bg-cover bg-center z-10 "
        style={{ backgroundImage: `url(${kettle})` }}
      >
        <div className="h-[65vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-light font-oswald uppercase text-center">
            Our Contact
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
              to={"/contact"}
              className="p-2 font-bold text-primary transition-all duration-300"
            >
              Our Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="container w-full md:px-14 lg:px-24 h-auto gap-5 flex flex-col mb-12 items-center justify-center">
        <div className="w-full h-auto flex flex-col items-start px-4 py-12 justify-center">
          <h2 className="text-md font-bold text-primary font-muli uppercase text-center mt-10">
            Our Contact
          </h2>
          <p className="text-light font-oswald text-3xl font-bold uppercase text-start mt-4">
            Get in Touch with Us
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-12 ">
          <div className="mt-6 flex flex-1 flex-col w-full px-4 items-start justify-start">
            {[
              {
                icon: <FaMapLocationDot />,
                text: "123 Fitness St, Workout City, Fitland",
              },
              { icon: <FaMobile />, text: "+1 (234) 567-8900 " },
              { icon: <FaEnvelope />, text: "info@gymer.com" },
            ].map((item, index) => (
              <div key={index} className="flex w-full items-center mt-2">
                <span className="h-16 w-16 bg-accent mb-4 group-hover:bg-primary rounded-full flex items-center justify-center text-primary group-hover:text-light text-3xl font-bold">
                  {item.icon}
                </span>
                <p className="text-text text-base ml-2">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:flex-1 p-4 bg-secondary shadow-lg">
            <form className="flex w-full flex-col gap-4">
              <input
                type="number"
                className="p-2 rounded-lg border-2 border-accent bg-secondary text-light"
                placeholder="Name"
                required
              />

              <input
                type="number"
                className="p-2 rounded-lg border-2 border-accent bg-secondary text-light"
                placeholder="Email"
                required
              />

              <input
                type="number"
                className="p-2 rounded-lg border-2 border-accent bg-secondary text-light"
                placeholder="Phone Number"
                required
              />
              <textarea
                type="text"
                className="p-2 h-32 rounded-lg border-2 border-accent bg-secondary text-light"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                className="bg-primary text-light p-3 rounded-lg hover:bg-accent transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-auto items-start px-4 py-12 justify-center">
          <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.332992103509!2d7.6207215999999995!3d9.0333575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e060547db4e29%3A0x39109b283278aa3d!2sOrange%20Mkt%2C%20Ado%20961105%2C%20Nasarawa!5e0!3m2!1sen!2sng!4v1748953444412!5m2!1sen!2sng"
                      width="100%"
                        height="450"
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
