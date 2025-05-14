/* eslint-disable react/jsx-key */
import { nanoid } from "nanoid";
import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import comfyStoreImg from './assets/comfyStore.png';
import reactFood from './assets/reactFood.png';
import githubProfileExplorer from './assets/githubProfileExplorer.png';

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML5 & CSS3",
    icons: [
      <FaHtml5 className="h-16 w-16 text-emerald-500" />,
      <FaCss3Alt className="h-16 w-16 text-emerald-500" />,
    ],
    text: "Highly skilled in HTML5 & CSS3, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icons: [<SiTailwindcss className="h-16 w-16 text-emerald-500" />],
    text: "Efficient in crafting modern, responsive designs using Tailwind CSS, streamlining development with utility-first styling.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icons: [<SiJavascript className="h-16 w-16 text-emerald-500" />],
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icons: [<SiTypescript className="h-16 w-16 text-emerald-500" />],
    text: "Skilled in TypeScript, enhancing code quality and maintainability with strong static typing for JavaScript projects.",
  },
  {
    id: nanoid(),
    title: "React",
    icons: [<FaReact className="h-16 w-16 text-emerald-500" />],
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icons: [<SiNextdotjs className="h-16 w-16 text-emerald-500" />],
    text: "In-depth experience with Next.js, building server-rendered applications with optimized performance, SEO-friendly architecture, and seamless integration of advanced routing and data fetching capabilities.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: comfyStoreImg,
    url: "https://comfy-store-peach.vercel.app/",
    github: "https://github.com/mrtnwilliam/comfy-store",
    title: "Comfy Store",
    text: "A responsive e-commerce platform with user authentication, shopping cart, payment processing, and an admin dashboard for product management and analytics. Features include dark mode, reviews, and wishlists",
  },
  {
    id: nanoid(),
    img: reactFood,
    url: "https://react-food-gold.vercel.app/",
    github: "https://github.com/mrtnwilliam/React-Food",
    title: "React Food",
    text: "A modern food ordering app with a multi-step ordering process, cart management, and streamlined checkout. Features responsive design, efficient state management with Context API, and custom hooks for API handling.",
  },
  {
    id: nanoid(),
    img: githubProfileExplorer,
    url: "https://github-profile-explorer-xi.vercel.app/",
    github: "https://github.com/mrtnwilliam/Github-Profile-Explorer",
    title: "Github Profile Explorer",
    text: "A GraphQL-powered GitHub profile analyzer displaying user stats, repository metrics, and language usage through interactive visualizations. Features include bio details and comprehensive GitHub activity insights.",
  },
];
