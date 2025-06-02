import { CgGym } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiFruitBowl, GiWeightLiftingUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { boxing, cycling, gamba, kettlebellpower, weightlifting, yoga, ben, bolu, chichi, mamuzo, prisca, taiwo, luchi, chidera } from "../assets/images";


const services = [
  {
    title: "Modern Gym Equipment",
    description: "State-of-the-art equipment for all your fitness needs.",
    icon: <GiWeightLiftingUp className="h-10 w-10" />,
  },
  {
    title: "Group Classes",
    description: "Join our group classes for a fun and motivating workout.",
    icon: <FaPeopleGroup className="h-10 w-10" />,
  },
  {
    title: "Professional Training",
    description: "Work with certified trainers to achieve your fitness goals.",
    icon: <CgGym className="h-10 w-10" />,
  },
  {
    title: "Nutrition Coaching",
    description:
      "Get personalized nutrition advice to complement your training.",
    icon: <GiFruitBowl className="h-10 w-10" />,
  },
];

const plans = [
  {
    id: "543",
    name: "Class Drop-in",
    amount: "39.0",
    schedule: "Single Class",
    package: "303",
  },
  {
    id: "584",
    name: "Six To Fit",
    amount: "120.0",
    schedule: "6 Months",
    package: "363"
  },
  {
    id: "554",
    name: "Yearly Membership",
    amount: "250.0",
    schedule: "12 Months",
    package: "354"
  },

];
const packages = [
  {
    id: "303",
    itemone: "Free Riding",
    itemtwo: "Unlimited Equipments",
    itemthree: "Personal Trainer",
    itemfour: "Weight Loss Classes",
    itemfive: "Month to Month Classes",
    itemsix: "No Time Restriction",
  },
  {
    id: "363",
    itemone: "Free Riding",
    itemtwo: "Unlimited Equipments",
    itemthree: "Personal Trainer",
    itemfour: "Weight Loss Classes",
    itemfive: "Protein Suppliments",
    itemsix: "No Time Restriction",
  },
  {
    id: "354",
    itemone: "Free Riding",
    itemtwo: "Unlimited Equipments",
    itemthree: "Personal Trainer",
    itemfour: "Weight Loss Classes",
    itemfive: "Swimming Pool Access",
    itemsix: "No Time Restriction",
  }
];
const classes = [
  {
    id: "101",
    name: "Yoga",
    category: "Flexibility",
    image: yoga,
    description: "Enhance your flexibility and mindfulness with our yoga classes.",
  },
  {
    id: "102",
    name: "Cycling",
    category: "Cardio",
    image: cycling,
    description: "Get your heart pumping with our high-energy cycling sessions.",
  },
  {
    id: "103",
    name: "Weightlifting",
    category: "Strength",
    image: weightlifting,
    description: "Build strength and muscle with our weightlifting programs.",
  },
  {
    id: "104",
    name: "Boxing",
    category: "Combat",
    image: boxing,
    description: "Learn boxing techniques while getting a great workout.",
  },
  {
    id: "105",
    name: "Kettlebell Power",
    category: "Strength",
    image: kettlebellpower,
    description: "Increase your strength and endurance with kettlebell training.",
  },
  {
    id: "106",
    name: "Gamba",
    category: "Dance",
    image: gamba,
    description: "Experience the rhythm and energy of Gamba dance classes.",
  },
];
const teamMembers = [
  { name: "Bolu Bola", category: "Flexibility", image: bolu },
  { name: "Ben Obi", category: "Cardio", image: ben },
  { name: "Mamuzo Tega", category: "Strength", image: mamuzo },
  { name: "Taiwo Afolayin", category: "Combat", image: taiwo },
  { name: "Prisca Madu", category: "Strength", image: prisca },
  { name: "Chichi KC", category: "Flexibility", image: chichi },
  { name: "Luchi Uche", category: "Flexibility", image: luchi },
  { name: "Chidera Ugochukwu", category: "Cardio", image: chidera },
  {name: "Rachael Babagida", category: "Strength", image: "" },
];
const timetableData = [
  {
    day: "Monday",
    sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Weight Loose",
        instructor: "Ben Obi",
        category: "Cardio",
      },
      {
        time: "5:00pm - 7:00pm",
        title: "Boxing",
        instructor: "Taiwo Afolayin",
        category: "Combat",
      },
      {
        time: "7:00pm - 9:00pm",
        title: "Cardio",
        instructor: "Chidera Ugochukwu",
        category: "Cardio",
      },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Cardio",
        instructor: "Chidera Ugochukwu",
        category: "Cardio",
      },
      {
        time: "10:00am - 12:00pm",
        title: "Fitness",
        instructor: "Chichi KC",
        category: "Flexibility",
      },
      {
        time: "5:00pm - 7:00pm",
        title: "Karate",
        instructor: "Ebuka Okeke",
        category: "Combat",
      },
    ],
  },
  {
    day: "Wednesday",
  sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Yoga",
        instructor: "Bolu Bola",
        category: "Flexibility",
      },
      {
        time: "10:00am - 12:00pm",
        title: "Weight Loose",
        instructor: "Ben Obi",
        category: "Cardio",
      },
      {
        time: "5:00pm - 7:00pm",
        title: "Boxing",
        instructor: "Taiwo Afolayin",
        category: "Combat",
      },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Kettlebell Power",
        instructor: "Mamuzo Tega",
        category: "Strength",
      },
      {
        time: "10:00am - 12:00pm",
        title: "Gamba Dance",
        instructor: "Prisca Madu",
        category: "Dance",
      },
      {
        time: "5:00pm - 7:00pm",
        title: "Yoga",
        instructor: "Chichi KC",
        category: "Flexibility",
      },
    ],
  },
  {
    day: "Friday",
    sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Cycling Class",
        instructor: "Luchi Uche",
        category: "Cardio",
      },
      {
        time: "10:00am - 12:00pm",
        title: "Weightlifting Basics",
        instructor: "Chidera Ugochukwu",
        category: "Strength",
      },
      {
        time: "5:00pm - 7:00pm",
        title: "Boxing Techniques",
        instructor: "Taiwo Afolayin",
        category: "Combat",
      },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Yoga Flow",
        instructor: "Bolu Bola",
        category: "Flexibility",
      },
      {
        time: "10:00am - 12:00pm",
        title: "Kettlebell Power",
        instructor: "Mamuzo Tega",
        category: "Strength",
      },
      {
        time: "5:00pm - 7:00pm",
        title: "Gamba Dance Class",
        instructor: "Prisca Madu",
        category: "Cardio",
      },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      {
        time: "6:00am - 8:00am",
        title: "Rest and Recovery",
        instructor: "Chidera Ugochukwu",
        category: "Strength",
      },
      {
        time: "10:00am - 12:00pm",
        title: "Open Gym Time",
        instructor: "",
        category: "",
      },
    ],
  },
];
const bmiChart = [
  { range: "Underweight", bmi: "< 18.5" },
  { range: "Normal weight", bmi: "18.5 - 24.9" },
  { range: "Overweight", bmi: "25 - 29.9" },
  { range: "Obesity", bmi: "30 and above" },
];


export {services, plans, packages, classes, teamMembers, timetableData, bmiChart};