import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { teamMembers } from "../Data/itemsData";
import { LiaEnvelope, LiaFacebook, LiaInstagram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";

export default function Trainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { name } = useParams();
  const trainer = teamMembers.find(
    (item) => item.name === decodeURIComponent(name)
  );

  if (!trainer) {
    return <p className="text-center text-red-500">Trainer not found!</p>;
  }

  return (
    <section className="h-auto w-full bg-secondary">
      <div
        className="container md:px-14 lg:px-24 w-full h-full flex items-center pb-6 justify-start bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${trainer.image})` }}
      >
        <div className="h-[65vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-light font-oswald uppercase text-center">
            {trainer.name}
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
              to="/team"
              className="p-2 font-bold text-light hover:text-primary transition-all duration-300"
            >
              Our Team
            </Link>
            <span className="text-light font-bold">|</span>
            <span className="p-2 font-bold text-primary transition-all duration-300">
              {trainer.name}
            </span>
          </div>
        </div>
      </div>
      <div className="container w-full md:px-14 lg:px-24 h-auto gap-5 flex flex-col mb-12 items-center justify-center">
        <div className="w-full bg-secondary rounded-lg shadow-lg p-8 mt-8 flex flex-col md:flex-row items-center">
          <div className="w-4/6 h-4/5 flex-1">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover "
            />
          </div>

          <div className="flex-1 ml-4">
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
            <p className="text-primary font-muli mb-2">{trainer.category}</p>
            <ul className="text-light font-muli mb-2">
              <li className="flex items-center justify-between border-b border-accent py-4">
                <strong>Age:</strong> {trainer.age}
              </li>
              <li className="flex items-center justify-between border-b border-accent py-4">
                <strong>Height:</strong> {trainer.height}
              </li>
              <li className="flex items-center justify-between border-b border-accent py-4">
                <strong>Weight:</strong> {trainer.weight}
              </li>
            </ul>
            <p className="text-text mb-5 font-muli">{trainer.about}</p>
            <Link
              to={`/trainer`}
              className="font-oswald px-2 z-30 md:px-7 py-1 my-2 font-bold bg-inherit transition-all text-center border-2 border-primary w-1/3 text-light flex items-center justify-center"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
