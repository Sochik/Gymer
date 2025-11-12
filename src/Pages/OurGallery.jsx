import { useEffect } from 'react'
import Gallery from '../Components/Gallery';
import PageHero from '../Components/PageHero';

export default function OurGallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="h-auto w-full bg-secondary">
      <PageHero title="Our Gallery" link="/gallery" />
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

