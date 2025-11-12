import { useEffect, useState } from "react";
import { plans } from "../Data/itemsData";
import Aside from "../Components/Aside";
import PageHero from "../Components/PageHero";
import PageSectionHeader from "../Components/PageSectionHeader";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    bmi: "",
    goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    alert("Registration submitted!");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="h-auto w-full bg-secondary">
      <PageHero title="Register" link="/register" />
      <div className="container w-full md:px-14 lg:px-24 h-auto gap-8 flex flex-col md:flex-row mb-12">
        <div className="w-full md:w-4/6 bg-secondary px-6 shadow-lg md:py-8 mt-8 flex flex-col items-center">
          <PageSectionHeader title="Register" subtitle="Join Us Today" />
          <form className="w-full md:w-2/3 flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-2 rounded-lg border-2 border-accent bg-secondary focus:border-primary text-light"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-2 rounded-lg border-2 border-accent bg-secondary focus:border-primary text-light"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="p-2 rounded-lg border-2 border-accent bg-secondary focus:border-primary text-light"
              placeholder="Phone Number"
              required
            />
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="p-2 rounded-lg border-2 border-accent bg-secondary focus:border-primary text-light"
              required
            >
              <option value="">Select a Plan</option>
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} - ${plan.amount} ({plan.schedule})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="bmi"
              value={form.bmi}
              onChange={handleChange}
              className="p-2 rounded-lg border-2 border-accent bg-secondary focus:border-primary text-light"
              placeholder="BMI"
              required
            />
            <select
              name="goal"
              value={form.goal}
              onChange={handleChange}
              className="p-2 rounded-lg border-2 border-accent bg-secondary focus:border-primary text-light"
              required
            >
              <option value="">Select Your Goal</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="flexibility">Flexibility</option>
              <option value="endurance">Endurance</option>
              <option value="general_fitness">General Fitness</option>
            </select>
            <button
              type="submit"
              className=" hover:shadow-lg text-light p-3 rounded-lg bg-primary transition-all duration-300 font-bold"
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full md:w-2/6 bg-secondary px-6">
          <Aside />
        </div>
      </div>
    </section>
  );
}
