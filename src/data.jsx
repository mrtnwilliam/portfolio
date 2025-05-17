/* eslint-disable react/jsx-key */
import { nanoid } from "nanoid";
import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiShadcnui,
  SiGraphql
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
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
    title: "Next.js",
    icons: [<SiNextdotjs className="h-16 w-16 text-emerald-500" />],
    text: "In-depth experience with Next.js, building server-rendered applications with optimized performance, SEO-friendly architecture, and seamless integration of advanced routing and data fetching capabilities.",
  },
  {
    id: nanoid(),
    title: "React",
    icons: [<FaReact className="h-16 w-16 text-emerald-500" />],
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icons: [<SiTypescript className="h-16 w-16 text-emerald-500" />],
    text: "Skilled in TypeScript, enhancing code quality and maintainability with strong static typing for JavaScript projects.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icons: [<SiJavascript className="h-16 w-16 text-emerald-500" />],
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "GraphQl",
    icons: [<SiGraphql className="h-16 w-16 text-emerald-500" />],
    text: "Proficient in GraphQL, implementing efficient API queries and mutations with type-safe schemas, enabling flexible data fetching and optimized client-server communication.",
  },
  {
    id: nanoid(),
    title: "REST API",
    icons: [<TbApi className="h-16 w-16 text-emerald-500" />],
    text: "Experienced in designing and implementing RESTful APIs, focusing on efficient endpoint structuring, data handling, and HTTP protocol best practices.",
  },
  {
    id: nanoid(),
    title: "Shadcn UI",
    icons: [<SiShadcnui className="h-16 w-16 text-emerald-500" />],
    text: "Proficient in building accessible and customizable user interfaces with Shadcn UI, combining the power of Radix UI primitives with the flexibility of Tailwind CSS for modern web applications.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icons: [<SiTailwindcss className="h-16 w-16 text-emerald-500" />],
    text: "Efficient in crafting modern, responsive designs using Tailwind CSS, streamlining development with utility-first styling.",
  },
  {
    id: nanoid(),
    title: "HTML5 & CSS3",
    icons: [
      <FaHtml5 className="h-16 w-16 text-emerald-500" />,
      <FaCss3Alt className="h-16 w-16 text-emerald-500" />,
    ],
    text: "Highly skilled in HTML5 & CSS3, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  
];

export const projects = [
  {
    id: nanoid(),
    img: comfyStoreImg,
    url: "https://comfy-store-peach.vercel.app/",
    github: "https://github.com/mrtnwilliam/comfy-store",
    tags:["Next.js", "React.js", "TypeScript", "TailwindCSS", "Shadcn UI","Supabase","Clerk","Stripe"],
    title: "Comfy Store",
    text: "A responsive e-commerce platform with user authentication, shopping cart, payment processing, and an admin dashboard for product management and analytics. Features include dark mode, reviews, and wishlists",
  },
  {
    id: nanoid(),
    img: reactFood,
    url: "https://react-food-gold.vercel.app/",
    github: "https://github.com/mrtnwilliam/React-Food",
    tags:["React.js", "Context API", "Rest API","HTML5","CSS3"],
    title: "React Food",
    text: "A modern food ordering app with a multi-step ordering process, cart management, and streamlined checkout. Features responsive design, efficient state management with Context API, and custom hooks for API handling.",
  },
  {
    id: nanoid(),
    img: githubProfileExplorer,
    url: "https://github-profile-explorer-xi.vercel.app/",
    github: "https://github.com/mrtnwilliam/Github-Profile-Explorer",
    tags:["React.js", "TypeScript", "GraphQL", "TailwindCSS", "Shadcn UI"],
    title: "Github Profile Explorer",
    text: "A GraphQL-powered GitHub profile analyzer displaying user stats, repository metrics, and language usage through interactive visualizations. Features include bio details and comprehensive GitHub activity insights.",
  },
];
