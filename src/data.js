import { FaCode } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { PiCodeSimple } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { SiMinds, SiWipro } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Frontend",
    info: "Building responsive and high-performance user interfaces using React, JavaScript, and modern web technologies.",
  },
  {
    id: 2,
    icon: <BsDatabaseAdd />,
    title: "Backend",
    info: "Developing scalable server-side applications and REST APIs using Node.js, ensuring performance and reliability.",
  },
  {
    id: 3,
    icon: <PiCodeSimple />,
    title: "UI/UX",
    info: "Designing intuitive and visually appealing user experiences with a focus on usability, accessibility, and modern design trends.",
  },
];

export const about = [
  {
    id: 1,
    icon: <SiMinds />,
    title: "Experience",
    desc: "4+ years ",
  },
  {
    id: 2,
    icon: <SiWipro />,
    title: "Company",
    desc: "Wipro Limited",
  },
  {
    id: 3,
    icon: <MdCastForEducation />,
    title: "Education",
    desc: "(BTECH)",
  },
];

export const frontend = [
  {
    id: 1,
    title: "ReactJS",
  },
  {
    id: 2,
    title: "Javascript",
  },
  {
    id: 3,
    title: "Tailwind CSS",
  },
  {
    id: 4,
    title: "HTML",
  },
  {
    id: 5,
    title: "CSS",
  },
  {
    id: 6,
    title: "Git",
  },
];

export const backend = [
  {
    id: 1,
    title: "Python",
  },
  {
    id: 2,
    title: "SQL",
  },
  {
    id: 3,
    title: "Firebase",
  },
  {
    id: 4,
    title: "MongoDB",
  },
  {
    id: 5,
    title: "Node",
  },
  {
    id: 6,
    title: "Mysql",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is your background and experience?",
    answer:
      "I hold a Bachelor of Technology (B.Tech) degree and have been working in the field of web development for 4+ years. My experience includes various roles in frontend development and design, allowing me to build visually appealing and user-friendly websites.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "I specialize in frontend development, which includes creating interactive and responsive user interfaces using technologies such as HTML, CSS, JavaScript, and modern frontend frameworks like React and Nodejs for backend .",
  },
  {
    id: 3,
    question: "Can you customize a project to fit my specific needs?",
    answer:
      "Absolutely! I pride myself on tailoring solutions to meet each client's unique needs and goals. Let's discuss your specific requirements to create a customized solution.",
  },
  {
    id: 4,
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines can vary depending on the complexity and scope. I typically provide estimated project timelines after discussing the specific details and requirements of a project.",
  },
  {
    id: 5,
    question: "What is your pricing structure?",
    answer:
      "My pricing structure depends on the project's size, complexity, and duration. I offer both hourly and fixed-rate pricing options, which can be discussed further during project consultation.",
  },
  {
    id: 6,
    question: "What projects are you currently working on?",
    answer:
      "I'm currently working on various frontend development projects, each with its unique challenges and opportunities. Feel free to inquire about my current projects or discuss potential collaborations.",
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

const portfolio1 = require("./images/portfolio.mp4");
const portfolio2 = require("./images/video2.mp4");
const portfolio3 = require("./images/portfolio.mp4");
const portfolio4 = require("./images/video4.mp4");
const portfolio5 = require("./images/video5.mp4");
const portfolio6 = require("./images/video3.mp4");

export const portfolios = [
  {
    id: 1,
    image: portfolio1,
    name: "Harsh Design Hub",
    job: "A movie website",
    github: "https://github.com/Harsh0304/GymFusionHub",
    link: "https://harshDesignHub.netlify.app/",
  },
  {
    id: 2,
    image: portfolio2,
    name: "Gym Fusion Hub",
    job: "A foodies website",
    github: "https://github.com/Harsh0304/GymFusionHub",
    link: "https://gym-fusion-hub.netlify.app/",
  },
  {
    id: 3,
    image: portfolio3,
    name: "MovieLive",
    job: "a movie website",
    github: "https://github.com/Harsh0304/MovieLive",
    link: "https://movielive.netlify.app",
  },
  {
    id: 4,
    image: portfolio4,
    name: "PackageZone",
    job: "a website for npm packages",
    github: "https://github.com/Harsh0304/packageZone",
    link: "https://packagezone.netlify.app",
  },
  {
    id: 5,
    image: portfolio5,
    name: "ClinicalTrialsCommandCenter",
    job: "a clinical trials website",
    github: "https://github.com/Harsh0304/clinicalTrials",
    link: "https://clinicaltrialscommandcenter.netlify.app/",
  },
  {
    id: 6,
    image: portfolio6,
    name: "Holi Fest Joy",
    job: "a holiday website",
    github: "https://github.com/Harsh0304/HoliFestJoy",
    link: "https://holi-fest-joy.netlify.app",
  },
];
