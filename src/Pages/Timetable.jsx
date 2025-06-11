import React, { useEffect, useState } from "react";
import { kettle } from "../assets/images";
import { Link } from "react-router-dom";
import { timetableData } from "../Data/itemsData";

const times = [
  "6:00am - 8:00am",
  "10:00am - 12:00pm",
  "5:00pm - 7:00pm",
  "7:00pm - 9:00pm",
];

// Extract all unique categories from timetableData
const categories = [
  "All",
  ...Array.from(
    new Set(
      timetableData
        .flatMap((day) => day.sessions.map((s) => s.category))
        .filter(Boolean)
    )
  ),
];

export default function Timetable() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterSessions = (session) =>
    activeCategory === "All" || session.category === activeCategory;
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
            Classes Timetable
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
              to={"/timetable"}
              className="p-2 font-bold text-primary transition-all duration-300"
            >
              Timetable
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-6 md:px-14 lg:px-24 w-full h-full flex flex-col items-center justify-center z-20 bg-secondary">
        <div className="w-full h-auto flex md:flex-row flex-col py-12 justify-center">
          <div className="w-full h-auto flex flex-col items-start justify-center">
            <h2 className="text-md font-bold text-primary font-muli uppercase text-center">
              Find Your Time
            </h2>
            <p className="text-light font-oswald text-3xl mb-4 font-bold uppercase text-start">
              Our Master Piece for You
            </p>
          </div>
          <div className="flex gap-3 bg-backdrop px-2 h-auto items-center justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`py-2 font-muli h-auto transition-colors duration-200 ${
                  activeCategory === cat
                    ? "text-primary"
                    : " text-dark hover:underline"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[700px] grid grid-cols-[170px_repeat(7,minmax(120px,1fr))] gap-px border-2 border-accent bg-secondary mb-12">
            {/* Header Row */}
            <div className="bg-primary"></div>
            {timetableData.map((day, colIdx) => (
              <div
                key={colIdx}
                className="bg-primary text-center py-2 font-bold"
              >
                {day.day}
              </div>
            ))}

            {/* Time Rows */}
            {times.map((time, rowIdx) => (
              <React.Fragment key={time}>
                <div className="bg-black text-primary text-center text-sm font-semibold px-2 py-4">
                  {time}
                </div>
                {timetableData.map((day, colIdx) => {
                  // Find session for this time and filter
                  const session = day.sessions.find(
                    (s) => s.time === time && filterSessions(s)
                  );
                  // Chessboard effect: alternate bg using row+col index
                  const isEven = (rowIdx + colIdx) % 2 === 0;
                  const cellBg = isEven ? "bg-secondary" : "bg-backdrop";
                  return (
                    <div
                      key={colIdx}
                      className={`${cellBg} text-center p-3 h-[120px] transition-all duration-300 hover:bg-primary hover:text-light flex flex-col items-center justify-center`}
                    >
                      {session ? (
                        <>
                          <p className="font-bold text-light font-oswald uppercase">
                            {session.title}
                          </p>
                          <p className="text-xs text-light">
                            {session.instructor}
                          </p>
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
