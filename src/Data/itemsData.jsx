import { CgGym } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiFruitBowl, GiWeightLiftingUp } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import {
  boxing,
  cycling,
  gamba,
  kettlebellpower,
  weightlifting,
  yoga,
  ben,
  bolu,
  chichi,
  mamuzo,
  prisca,
  taiwo,
  luchi,
  chidera,
  tony,
} from "../assets/images";

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
    package: "363",
  },
  {
    id: "554",
    name: "Yearly Membership",
    amount: "250.0",
    schedule: "12 Months",
    package: "354",
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
  },
];
const classes = [
  {
    id: "101",
    name: "Yoga",
    category: "Flexibility",
    image: yoga,
    description:
      "Enhance your flexibility and mindfulness with our yoga classes. Our sessions are designed for all levels, focusing on improving balance, strength, and mental clarity. Guided by experienced instructors, you’ll learn a variety of poses and breathing techniques that help reduce stress and promote relaxation. Whether you’re a beginner or an advanced practitioner, our yoga classes offer a supportive environment to deepen your practice, increase body awareness, and foster a sense of inner peace. Join us to experience the transformative benefits of yoga for both mind and body.",
    trainer: "Bolu Bola",
  },
  {
    id: "102",
    name: "Cycling",
    category: "Cardio",
    image: cycling,
    description:
      "Get your heart pumping with our high-energy cycling sessions. These classes are perfect for anyone looking to boost cardiovascular health, burn calories, and build lower body strength. Our motivating instructors lead you through a variety of terrains and intensities, set to energizing music that keeps you moving. Whether you’re training for an event or just want a fun, effective workout, our cycling classes offer a supportive group atmosphere. Improve your endurance, challenge yourself, and enjoy the thrill of indoor cycling with us every week.",
    trainer: "Chidera Ugochukwu",
  },
  {
    id: "103",
    name: "Weightlifting",
    category: "Strength",
    image: weightlifting,
    description:
      "Build strength and muscle with our weightlifting programs. Our classes are designed to teach proper lifting techniques, ensuring safety and effectiveness for all participants. With guidance from certified trainers, you’ll work on compound movements and targeted exercises to increase muscle mass, boost metabolism, and enhance overall fitness. Suitable for all experience levels, our weightlifting sessions focus on progressive overload and personalized feedback. Join our community to gain confidence, improve your form, and achieve your strength goals in a motivating and supportive environment.",
    trainer: "Mamuzo Tega",
  },
  {
    id: "104",
    name: "Boxing",
    category: "Combat",
    image: boxing,
    description:
      "Learn boxing techniques while getting a great workout in our dynamic boxing classes. These sessions combine skill development, cardio conditioning, and strength training for a full-body experience. Our expert coaches will guide you through footwork, punches, and defensive moves, helping you build confidence and agility. Boxing is not only an excellent way to relieve stress but also improves coordination and endurance. Whether you’re new to boxing or looking to refine your skills, our classes offer a safe, energetic space for all fitness levels.",
    trainer: "Taiwo Afolayin",
  },
  {
    id: "105",
    name: "Kettlebell Power",
    category: "Strength",
    image: kettlebellpower,
    description:
      "Increase your strength and endurance with kettlebell training. Our Kettlebell Power classes blend functional movements with high-intensity intervals, targeting multiple muscle groups for a comprehensive workout. Led by experienced trainers, you’ll learn proper form and technique to maximize results and minimize injury risk. These sessions are designed to improve power, flexibility, and cardiovascular fitness. Whether you’re a beginner or seasoned athlete, our kettlebell classes provide scalable challenges and a supportive environment to help you reach your fitness goals efficiently.",
    trainer: "Prisca Madu",
  },
  {
    id: "106",
    name: "Gamba",
    category: "Dance",
    image: gamba,
    description:
      "Experience the rhythm and energy of Gamba Experience the rhythm and energy of Gamba dance classes. This unique program combines traditional dance moves with modern fitness routines, creating a fun and engaging workout for all ages. Our skilled instructors guide you through choreographed routines that improve coordination, flexibility, and cardiovascular health. Gamba classes are perfect for anyone looking to express themselves, relieve stress, and stay active in a lively group setting. No dance experience is necessary—just bring your enthusiasm and enjoy the vibrant culture and community spirit of Gamba dance.dance classes.",
    trainer: "Chichi KC",
  },
];
const teamMembers = [
  {
    name: "Bolu Bola",
    category: "Flexibility",
    image: bolu,
    height: "10'2``",
    weight: "70kg",
    age: "28",
    about:
      "Bolu is a certified yoga instructor with over 5 years of experience in teaching various yoga styles. She is passionate about helping individuals improve their flexibility and mindfulness through yoga practices.",
  },
  {
    name: "Ben Obi",
    category: "Cardio",
    image: ben,
    height: "6'0``",
    weight: "80kg",
    age: "30",
    about:
      "Ben is a fitness enthusiast and certified personal trainer specializing in cardio workouts. With a focus on high-intensity training, he helps clients achieve their weight loss and fitness goals through engaging cardio sessions.",
  },
  {
    name: "Mamuzo Tega",
    category: "Strength",
    image: mamuzo,
    height: "5'11``",
    weight: "85kg",
    age: "32",
    about:
      "Mamuzo is a strength training expert with a background in sports science. He designs personalized strength training programs to help clients build muscle and improve overall fitness levels.",
  },
  {
    name: "Taiwo Afolayin",
    category: "Combat",
    image: taiwo,
    height: "5'9``",
    weight: "75kg",
    age: "29",
    about:
      "Taiwo is a professional boxer and combat sports coach. With years of experience in the ring, he teaches boxing techniques and self-defense skills while providing an intense workout for his clients.",
  },
  {
    name: "Prisca Madu",
    category: "Strength",
    image: prisca,
    height: "5'8``",
    weight: "65kg",
    age: "27",
    about:
      "Prisca is a kettlebell training specialist with a passion for functional fitness. She incorporates kettlebell exercises into her training sessions to enhance strength, endurance, and overall athletic performance.",
  },
  {
    name: "Chichi KC",
    category: "Flexibility",
    image: chichi,
    height: "5'7``",
    weight: "60kg",
    age: "26",
    about:
      "Chichi is a dance fitness instructor with a flair for Gamba dance. She combines dance movements with fitness routines to create fun and energetic classes that improve flexibility and cardiovascular health.",
  },
  {
    name: "Luchi Uche",
    category: "Flexibility",
    image: luchi,
    height: "5'10``",
    weight: "72kg",
    age: "31",
    about:
      "Luchi is a cycling instructor with a passion for promoting cardiovascular health. She leads high-energy cycling classes that challenge participants while providing an exhilarating workout experience.",
  },
  {
    name: "Chidera Ugochukwu",
    category: "Cardio",
    image: chidera,
    height: "6'1``",
    weight: "78kg",
    age: "33",
    about:
      "Chidera is a versatile fitness trainer specializing in cardio workouts. With a focus on high-intensity interval training (HIIT), he helps clients burn calories and improve their overall fitness levels through dynamic cardio sessions.",
  },
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

export {
  services,
  plans,
  packages,
  classes,
  teamMembers,
  timetableData,
  bmiChart,
};
