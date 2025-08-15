import React, { useEffect } from "react";
import { bmiChart } from "../Data/itemsData";
import PageSectionHeader from "../Components/PageSectionHeader";
import PageHero from "../Components/PageHero";

export default function BMICalculator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="h-auto w-full bg-secondary">
      <PageHero title="BMI Calculator" link="/bmi-calculator" />
      <div className="container md:px-14 lg:px-24 w-full h-full flex flex-col items-center justify-center z-20 bg-secondary">
        <div className="w-full h-auto gap-5 flex flex-col md:flex-row mb-12 items-center justify-center">
          <div className="w-full h-auto flex flex-col items-start px-4 py-12 justify-center">
            <PageSectionHeader title="BMI Chart" subtitle="Understand Your Body Mass Index" />
            {/* BMI-Chart */}
            <div className="mt-6 w-full grid grid-cols-2 bg-secondary border-2 border-accent">
              <div className="p-4 bg-backdrop text-light font-extrabold border-b-2 border-r-2 border-accent">
                BMI
              </div>
              <div className="p-4 bg-backdrop text-light font-extrabold border-b-2 border-l-2 border-accent">
                Weight Status
              </div>

              {bmiChart.map((item, index) => {
                const isEven = index % 2 === 0;
                const cellBg = isEven ? "bg-secondary" : "bg-backdrop";
                return (
                  <React.Fragment key={index}>
                    <div
                      className={`p-4 text-dark font-semibold border-r border-accent ${cellBg}`}
                    >
                      {item.bmi}
                    </div>
                    <div
                      className={`p-4 text-dark font-semibold border-l border-accent ${cellBg}`}
                    >
                      {item.range}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="w-full h-auto flex flex-col items-start px-4 py-12 justify-center">
            <PageSectionHeader title="Check Your BMI" subtitle="Calculate your Body Mass Index (BMI)" />
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="text-light font-base text-lg my-6">
                {" "}
                BMI is a simple calculation using a person's height and weight.
                It is defined as the individual's body mass divided by the
                square of their height.
              </p>
              <div className=" p-4 bg-secondary rounded-lg w-full max-w-full">
                <form className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    className="p-2 rounded-lg border border-accent bg-secondary text-light focus:border-primary"
                    placeholder="Weight (kg)"
                    required
                  />

                  <input
                    type="number"
                    className="p-2 rounded-lg border border-accent bg-secondary text-light focus:border-primary"
                    placeholder="Height (cm)"
                    required
                  />

                  <input
                    type="number"
                    className="p-2 rounded-lg border border-accent bg-secondary text-light focus:border-primary"
                    placeholder="Age (years)"
                    required
                  />
                  <input
                    type="text"
                    className="p-2 rounded-lg border border-accent bg-secondary text-light focus:border-primary"
                    placeholder="Male/Female"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary text-light p-2 rounded-lg hover:bg-accent transition-all duration-300"
                  >
                    Calculate BMI
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
