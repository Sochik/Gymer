import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { classes, teamMembers } from "../Data/itemsData";
import { kettle } from "../assets/images";
import { LiaEnvelope, LiaFacebook, LiaInstagram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import Aside from "../Components/Aside";

export default function ClassDetail() {
  const { id } = useParams();
  const classDetail = classes.find((item) => String(item.id) === String(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!classDetail) {
    return <p className="text-center text-red-500">Class not found!</p>;
  }

  return (
    <section className="h-auto w-full bg-secondary">
      <div
        className="container md:px-14 lg:px-24 w-full h-full flex items-center pb-6 justify-start bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${kettle})` }}
      >
        <div className="h-[65vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-light font-oswald uppercase text-center">
            {classDetail.name}
          </h1>
          <div className="flex font-muli items-center justify-center mt-6">
            <Link
              to="/"
              className="p-2 text-light font-bold hover:text-primary transition-all duration-300"
            >
              Back to Home
            </Link>
            <span className="text-light font-bold">|</span>
            <Link
              to="/classes"
              className="p-2 font-bold text-light hover:text-primary transition-all duration-300"
            >
              Classes
            </Link>
            <span className="text-light font-bold">|</span>
            <span className="p-2 font-bold text-primary transition-all duration-300">
              {classDetail.name}
            </span>
          </div>
        </div>
      </div>
      <div className="container w-full md:px-14 lg:px-24 h-auto gap-8 flex flex-col md:flex-row">
        <div className="w-full md:w-4/6 bg-secondary md:py-8 mt-8 flex flex-col items-start">
          <div className="w-full mb-6 md:mb-0">
            <img
              src={classDetail.image}
              alt={classDetail.name}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <div className="flex-1 px-6 md:px-0">
            <h2 className="text-3xl font-bold py-6 text-light font-oswald uppercase">
              {classDetail.name}
            </h2>
            <p className="text-text font-muli">{classDetail.description}</p>
            <h2 className="text-3xl font-bold py-6 text-light font-oswald uppercase">
              Trainer
            </h2>
            <p className="text-text font-muli">
              Our trainers are dedicated professionals committed to helping you
              achieve your fitness goals. With backgrounds in health, wellness,
              and athletic training, they bring expertise, motivation, and
              personalized support to every session. They focus on proper
              technique, safety, and continuous improvement, ensuring you get
              the most out of every workout. Trust our trainers to inspire and
              empower you on your fitness journey.
            </p>
            {(() => {
              const trainer = teamMembers.find(
                (t) => t.name === classDetail.trainer
              );
              if (!trainer) return null;
              return (
                <div className="w-full bg-secondary rounded-lg  mt-8 flex gap-6 flex-col md:flex-row items-center">
                  <div className="w-full md:h-96 flex-1">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <h2 className="text-2xl font-bold text-light font-oswald mb-2">
                        {trainer.name}
                      </h2>
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
                          >
                            <Link to={link.to}>{link.icon}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <p className="text-primary font-muli mb-2">
                      {trainer.category}
                    </p>
                    <p className="text-text mb-5 font-muli">{trainer.about}</p>
                    <ul className="text-text font-muli mb-2">
                      <li className="flex items-center justify-between border-b border-accent py-4">
                        <strong className="text-light">Age:</strong>{" "}
                        {trainer.age}
                      </li>
                      <li className="flex items-center justify-between border-b border-accent py-4">
                        <strong className="text-light">Height:</strong>{" "}
                        {trainer.height}
                      </li>
                      <li className="flex items-center justify-between border-b border-accent py-4">
                        <strong className="text-light">Weight:</strong>{" "}
                        {trainer.weight}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>{" "}
        </div>
        <div className="flex flex-col w-full md:w-2/6 bg-secondary mt-8"><Aside /></div>
        
      </div>
    </section>
  );
}
