import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Eventoo from "@/public/eventoo.png";
import Crypto from "@/public/crypto.png";
import Moviee from "@/public/movieee.png";

import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated BCA",
    location: "Meerut , Uttar Pardesh",
    description:
      "I successfully earned a Bachelor's degree in Computer Applications (BCA) with distinction, achieving an impressive aggregate of 7 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Graduated MCA",
    location: "Meerut , Uttar Pardesh",
    description:
      "After obtaining my BCA degree, I pursued a Master's program and successfully graduated in 2023 with an impressive aggregate CGPA of 7.6",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer Bootcamp (ineuron.ai)",
    location: "Remote ",
    description:
      "I enrolled in a bootcamp during my master's program, where I acquired proficiency in React, Next.js, TypeScript, Tailwind, and MongoDB. Currently, I am actively seeking full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
   {
    title: "Full-Stack Developer at Designologix",
    location: "Hybrid ",
    description:
      "I worked as a Full Stack Developer, handling both frontend and backend tasks. I am currently seeking opportunities in Full stack development or similar roles.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Event Management Applications",
    description:
      "Designed and built a dynamic web app for easy event creation and management. User-friendly interface includes customizable settings and price tags.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: Eventoo,
  },
  {
    title: "Cryptocurrency Tracker WebApp",
    description:
      "Implemented a system for users to explore comprehensive cryptocurrency data with a rich user experience.",
    tags: ["React", "Javascript","Tailwind", "chart Js","CSS"],
    imageUrl: Crypto,
  },
  {
    title: "Movie Recommendation App",
    description:
      "Developed a user-friendly interface for effortless browsing and fetching of movies and series based on genres, enhancing the content discovery process for an improved user experience.",
    tags: ["React", "Imdb Api", "Tailwind"],
    imageUrl: Moviee,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "CORE Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
