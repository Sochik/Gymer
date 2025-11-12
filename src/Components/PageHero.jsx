import { kettle } from "../assets/images";
import { Link } from "react-router-dom";

export default function PageHero(props) { 
    return (
         <div
                className="md:px-14 lg:px-24 w-full h-full flex items-center pb-6 justify-start bg-cover bg-center z-10 "
                style={{ backgroundImage: `url(${kettle})` }}
              >
                <div className="h-[65vh] w-full flex flex-col items-center justify-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-light font-oswald uppercase text-center">
                    {props.title}
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
                      to={props.link}
                      className="p-2 font-bold text-primary transition-all duration-300"
                    >
                      {props.title}
                    </Link>
                  </div>
                </div>
              </div>
    )
}