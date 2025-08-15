import React, { useEffect } from "react";
import { asideimg } from "../assets/images";
import { Link } from "react-router-dom";
import Aside from "../Components/Aside";
import { testimonials, teamMembers } from "../Data/itemsData";
import Services from "../Components/Services";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PageSectionHeader from "../Components/PageSectionHeader";
import PageHero from "../Components/PageHero";

export default function About() {
  const [teamIndex, setTeamIndex] = React.useState(0);
  const [testIndex, setTestIndex] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextTeam = () => setTeamIndex((i) => (i + 1) % teamMembers.length);
  const prevTeam = () =>
    setTeamIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);

  // Testimonial slider handlers
  const nextTest = () => setTestIndex((i) => (i + 1) % testimonials.length);
  const prevTest = () =>
    setTestIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="h-auto w-full bg-secondary">
      <PageHero title="About Us" link="/about" />
      <div className="container w-full md:px-14 lg:px-24 h-auto gap-8 flex flex-col md:flex-row">
        <div className="w-full px-6 md:w-4/6 bg-secondary md:py-8 mt-8 flex flex-col items-center">
          {/* About Us Section */}
          <PageSectionHeader title="About Us" subtitle="Who We Are" />
          <p className="text-text font-muli text-lg mt-3 text-start mb-8">
            Gymer is dedicated to helping you achieve your fitness goals in a
            supportive and motivating environment. Our state-of-the-art
            facility, expert trainers, and diverse classes ensure everyone finds
            their path to health and strength. We believe in holistic wellness,
            combining physical training, nutrition, and community spirit to
            empower every member.
          </p>
          {/* About Team Section */}
          <PageSectionHeader
            title="MEET OUR TEAM"
            subtitle="EXPERTS IN YOUR CORNER"
          />
          <p className="text-text font-muli text-lg pt-10 text-start mb-8">
            Our team of trainers brings expertise, passion, and encouragement to
            every session. Each member is certified and committed to guiding you
            on your fitness journey, whether you’re just starting or looking to
            reach new heights.
          </p>
          {/* Team Slider */}
          <div className="flex items-center justify-center gap-4 w-full max-w-xl">
            <button
              onClick={prevTeam}
              className="p-2 rounded-full bg-accent text-light hover:bg-primary"
              aria-label="Previous Trainer"
            >
              <FaChevronLeft />
            </button>
            <div className="flex flex-col items-center bg-secondary p-6 w-full">
              <img
                src={teamMembers[teamIndex].image}
                alt={teamMembers[teamIndex].name}
                className="w-full h-full rounded-md object-cover mb-2"
              />
              <h3 className="text-xl font-bold text-light font-oswald mb-1">
                {teamMembers[teamIndex].name}
              </h3>
              <p className="text-light font-muli mb-1">
                {teamMembers[teamIndex].category}
              </p>
              <p className="text-text font-muli text-center">
                {teamMembers[teamIndex].about}
              </p>
            </div>
            <button
              onClick={nextTeam}
              className="p-2 rounded-full bg-accent text-light hover:bg-primary"
              aria-label="Next Trainer"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Why Choose Us Section */}
          <PageSectionHeader
            title="WHY CHOOSE US?"
            subtitle="PUSHING YOUR LIMITS FORWARD"
          />
          <Services />

          {/* Testimonial Section */}
          <PageSectionHeader
            title="What Our Members Say"
            subtitle="Testimonials"
          />
          {/* Testimonial Slider */}
          <div className="flex items-center justify-center gap-4 w-full max-w-xl">
            <button
              onClick={prevTest}
              className="p-2 rounded-full bg-accent text-light hover:bg-primary"
              aria-label="Previous Trainer"
            >
              <FaChevronLeft />
            </button>
            <div className="flex  flex-col items-center bg-secondary rounded-lg  p-6 w-full">
              <img
                src={testimonials[testIndex].image}
                alt={testimonials[testIndex].name}
                className=" object-cover mb-2 h-32 w-32 rounded-full"
              />
              <p className="text-text font-muli text-center mb-2">
                "{testimonials[testIndex].text}"
              </p>
              <h4 className="text-lg font-bold text-light font-oswald">
                {testimonials[testIndex].author}
              </h4>
            </div>
            <button
              onClick={nextTest}
              className="p-2 rounded-full bg-accent text-light hover:bg-primary"
              aria-label="Next Trainer"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-2/6 bg-secondary p-6 mt-8">
        <Aside />
        <div className="w-full h-auto items-start justify-center">
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
              to="/register"
              className="mt-3 px-9 md:px-12 font-oswald py-2 bg-inherit text-light border-2 border-primary font-bold rounded-md hover:bg-primary transition-all text-center items-center justify-center block w-fit"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
