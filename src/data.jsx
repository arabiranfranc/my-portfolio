import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import store from "./assets/nextjsstore.png";
import sulok from "./assets/sulok.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: store,
    url: "https://nextjs-store-lake.vercel.app/",
    github: "https://github.com/arabiranfranc",
    title: "Store",
    text: "Web based Online Store created using NextJS, Typescript, prisma, ClerkJS, daisyUI, tailwindcss and mongoDB as database",
  },
  {
    id: nanoid(),
    img: sulok,
    url: "https://sulok-theta.vercel.app/",
    github: "https://github.com/arabiranfranc",
    title: "Coffee Menu",
    text: "Web based coffee menu with QR code",
  },
];

export const certificates = [
  {
    id: nanoid(),
    url: "https://www.udemy.com/certificate/UC-7e45a591-c2b2-4cce-be3a-0523ce0ce18b",
    title:
      "Hands-on React: 25+ Projects Featuring Next.js, TypeScript, Prisma, Zod, Shadcn, Axios, Router 6, Query 5, Redux Toolkit",
    author: "John Smilga",
  },
  {
    id: nanoid(),
    url: "https://www.udemy.com/certificate/UC-27009731-547f-4ba4-a6af-3d68f7b5c605/",
    title:
      "Unlock the Power of Databases and Excel in SQL Mastery: Become a Highly Skilled SQL Developer with Database Knowledge",
    author: "OCSALY Academy",
  },
];
