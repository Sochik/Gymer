import { useMemo } from "react";
import {
  FaEnvelope,
  FaMapLocationDot,
  FaMobile,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { LiaEnvelope, LiaFacebook, LiaInstagram } from "react-icons/lia";
import { tips } from "../Data/itemsData";

export default function Footer() {
  // pick two random tips once per mount
  const selectedTips = useMemo(() => {
    if (!tips || tips.length <= 2) return tips || [];
    const arr = [...tips];
    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 2);
  }, []);

  return (
    <div className=" bg-backdrop w-full flex flex-col">
      <aside className="flex w-full container mx-auto justify-center p-4 items-center text-light font-muli font-semibold text-sm">
        {[
          {
            icon: <FaMapLocationDot />,
            text: "123 Fitness St, Workout City, Fitland",
          },
          { icon: <FaMobile />, text: "+1 (234) 567-8900 " },
          { icon: <FaEnvelope />, text: "info@gymer.com" },
        ].map((item, index) => (
          <div key={index} className="flex px-10 items-center mt-2">
            <span className="h-20 w-20 bg-primary mb-4 group-hover:bg-primary rounded-full flex items-center justify-center text-light group-hover:text-light text-3xl">
              {item.icon}
            </span>
            <p className="text-text ml-2">{item.text}</p>
          </div>
        ))}
      </aside>
      <div className="justify-center w-full items-center bg-[#000000] ">
        <div className=" mx-auto flex md:px-14 lg:px-24 gap-4 pt-12 pb-4 justify-center w-full items-center flex-wrap bg-[#000000] text-text font-muli text-sm">
          <div className="flex flex-col flex-1 w-1/3 items-start">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Gymer logo" className="w-40 h-auto mb-2" />
            </Link>
            <p className="mt-4 leading-6 text-dark">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              harum laboriosam nostrum, est saepe pariatur quisquam dicta
              assumenda consequatur beatae.
            </p>
            <ol className="flex items-center justify-center gap-6">
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
                  className="text-light hover:text-primary text-lg font-thin my-3 transition-colors duration-300"
                >
                  <Link to={link.to}>{link.icon}</Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex gap-4 w-1/3 items-center justify-around mx-auto">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 font-oswald text-light">
                Quick Links
              </h3>
              {[
                { name: "About Us", to: "/" },
                { name: "Classes", to: "/classes" },
                { name: "BMI-Calculator", to: "//bmi-calculator" },
                { name: "Gallery", to: "/gallery" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="mb-2 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 font-oswald text-light">
                Support
              </h3>
              {[
                { name: "Register", to: "/register" },
                { name: "Trainers", to: "/team" },
                { name: "Timetable", to: "/timetable" },
                { name: "Contact", to: "/contact" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="mb-2 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-start justify-evenly mx-auto">
            <h3 className="text-2xl mb-4 font-semibold font-oswald text-light">
              Tips & Guides
            </h3>
            {/* Tips */}
            <div className="flex flex-col w-full">
              {selectedTips.map((tip, idx) => (
                <div key={idx} className="flex flex-col">
                  <Link
                    to={tip.link}
                    className="items-center gap-3 px-6 md:px-0 pb-4 group hover:bg-backdrop rounded"
                  >
                    <div>
                      <h6 className="text-text font-oswald font-normal group-hover:text-light">
                        {tip.headline}
                      </h6>
                      <span className="text-xs text-text">{tip.date}</span>
                    </div>
                  </Link>
                  {/* render divider only after the first mapped item */}
                  {idx === 0 && <div className="w-full h-px bg-accent mb-4" />}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-accent mb-4" />
          <div className="w-full text-center text-text pb-4">
            &copy; {new Date().getFullYear()} Gymer. All rights reserved.
            </div>
        </div>
      </div>
    </div>
  );
}
