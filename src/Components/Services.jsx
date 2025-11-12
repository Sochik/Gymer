import { services } from "../Data/itemsData";


export default function Services() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 transition-transform duration-700 ease-in-out justify-center mx-auto items-center p-4 text-center group"
        >
          <span className="h-24 w-24 bg-accent group-hover:bg-primary rounded-full flex items-center justify-center text-primary group-hover:text-light text-2xl font-bold">
            {service.icon}
          </span>
          <h4 className="text-light text-center text-2xl font-extrabold uppercase font-oswald">
            {service.title}
          </h4>
          <p className="text-text line-clamp-3 text-center  text-base font-muli">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}