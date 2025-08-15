import React from "react";

export default function SectionHeader(props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="text-xl md:text-2xl font-bold font-gaegu text-primary text-center">
        {props.title}
      </span>
      <h2 className="text-3xl md:text-5xl font-oswald text-light font-semibold text-center">
        {props.subtitle}
      </h2>
    </div>
  );
}
