import React, { useEffect } from 'react'
import { kettle } from '../assets/images'
import { Link } from 'react-router-dom';
import Gallery from '../Components/Gallery';

export default function OurGallery() {
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
            Our Gallery
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
              to={"/gallery"}
              className="p-2 font-bold text-primary transition-all duration-300"
            >
              Our Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="container md:px-14 lg:px-24 w-full h-full flex flex-col items-center justify-center z-20 bg-secondary">
        <div className="w-full h-auto flex flex-col items-start px-4 py-12 justify-center">
          <h2 className="text-md font-bold text-primary font-muli uppercase text-center mt-10">
            Our Gallery
          </h2>
          <p className="text-light font-oswald text-3xl  font-bold uppercase text-start mt-4">
            Explore Our Fitness Journey Through Images
                  </p>
              </div>
              <div className="w-full h-auto flex flex-col mb-12 items-center justify-center">
                  <Gallery />
              </div>
      </div>
    </section>
  );
};

