
export default function PageSectionHeader (props) {
  return (
    <div className="w-full h-auto flex flex-col items-start pt-6 justify-center">
      <h2 className="text-md font-bold text-primary font-muli uppercase text-center">
        {props.title}
      </h2>
      <p className="text-light font-oswald text-3xl font-bold uppercase text-start mt-4">
        {props.subtitle}
      </p>
    </div>
  );
};


