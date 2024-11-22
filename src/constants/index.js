import {
  kayros,
  whitecape,
  polymerengineering,
  trimakus,
  vaistat,
} from "../assets/images";

import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  linkedin,
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
  contact,
  nestjs,
  solidity,
  firebase,
  php,
  mysql,
  postgresql,
  pma,
  figma,
  RabbitMQ,
  kafka,
  kubernetes,
  docker,
  fastAPI,
} from "../assets/icons";
//simply add or remove skills | projects add them to the assets folder and import

export const skills = [
  {
    imageUrl: firebase,
    name: "firebase",
    type: "Developer Tools",
  },

  {
    imageUrl: mysql,
    name: "mysql",
    type: "Databases",
  },

  {
    imageUrl: css,
    name: "CSS",
    type: "Web Technologies",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Developer Tools",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Developer Tools",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Web Technologies",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Web Technologies",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: fastAPI,
    name: "fastAPI",
    type: "backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "backend",
  },
  {
    imageUrl: kubernetes,
    name: "kubernetes",
    type: "backend",
  },
  {
    imageUrl: kafka,
    name: "Kafka",
    type: "backend",
  },
  {
    imageUrl: RabbitMQ,
    name: "RabbitMQ",
    type: "backend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Trimakus",
    icon: trimakus,
    iconBg: "white ",
    date: "Auguest 2024 – September 2024",
    points: [
      "I had the privilege of working at Trimakus for a total duration of 1 month, comprising 1 month as an intern.",
      "I  updated an older project by modernizing its design and technologies. This experience enhanced my skills in server-side logic and frontend development. ",
      "I did not get deep in the backend development, but I aknowledged how the backend and frontend communicate through APIs to exchange data and work together effectively ",
      "I also learned a new language, TypeScript, and how beneficial it is for large projects.",

      "TypeScript improves code reliability and scalability in large projects. Using React with TypeScript, I defined types for props and state, ensuring better safety and faster debugging.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "WhiteCape Technologies",
    icon: whitecape,
    iconBg: "rgba(255,255,255,0.7)",
    date: "july 2023 – August 2023",
    points: [
      "As a Web Development Intern, I built two static web pages using HTML, CSS, and JavaScript. These projects helped me grasp the fundamentals of web development and how APIs work through simple data fetching.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ahmedkacem-afk",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ahmed-kacem-133355275/",
  },
];

export const projects = [
  {
    iconUrl: vaistat,
    theme: "btn-white",
    name: "vaistat dispatch",
    description:
      "Vaistat Pharmacy is an online platform facilitating prescription medication delivery across Canada and the US. I modernized its frontend using React and TypeScript, improving user interactions, and enhanced backend features with Express and Node.js, ensuring efficient and reliable service integration.",
    link: "",
  },
  {
    iconUrl: car,
    theme: "btn-back-green",
    name: "Truck Fuel monetizing",
    description:
      "The Fuel Monetizing Dashboard for Trucks is a mock system built with FastAPI and React Query, using Faker (Python) to generate simulated fuel data. It showcases fuel usage, costs, and efficiency insights, demonstrating a potential monitoring system without real captors.",
    link: "",
  },
];
