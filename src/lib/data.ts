import type { ProjectType } from "./types";

export const projects: ProjectType[] = [
  {
    id: "project-1",
    title: "Job Portal",
    technologies: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "Shadcn UI",
      "Vapi",
      "OpenAI",
      "React Router",
      "Zod",
      "React Hook Form",
    ],
    description:
      "A full-featured job portal where candidates can search and apply for jobs, attend AI-powered interviews using Vapi and OpenAI, and receive instant feedback. Recruiters can create new job listings, schedule interviews, delete postings, or reject candidates. Authentication is handled with Clerk, and the UI is built using Shadcn UI and Tailwind CSS. Supabase manages backend data storage and user roles.",
    github: "https://github.com/BharatiPatra/JOB_PORTAL.git",
    link: "https://chayan-ai.netlify.app/",
  },

  {
    id: "project-2",
    title: "Uber Like App",
    technologies: ["React", "Tailwind CSS", "Express", "Mongoose"],
    description:
      "A full-stack Uber-like application with real-time ride booking, driver and passenger authentication, live location tracking, and fare estimation.",
    github: "https://github.com/BharatiPatra/Uber-Like-Application.git",
    link: "https://uber-like-application.vercel.app/",
  },
  {
    id: "project-3",
    title: "Job AI",
    technologies: [
      "React",
      "Typescript",
      "Career AI",
      "Tailwind CSS",
      "FastAPI",
      "TavilySearch API",
      "Gemini 1.5 flash model",
      "Langraph",
      "Nano vector db",
      "PathRAG",
    ],
    description:
      "An AI-powered career assistant platform that provides personalized job insights, intelligent responses, and real-time data using Gemini 1.5, TavilySearch API, and PathRAG with vector search.",
    github: "https://github.com/BharatiPatra/Asha_ai-chatbot.git",
    link: "https://asha-ai-chatbot-j1om.vercel.app/",
  },
  
    {
  id: "project-4",
  title: "AI Collaboration Python Code Editor",
  technologies: ["React.js", "Chakra UI", "Monaco Editor", "Socket.io", "Express.js", "Pyodide", "Mistral API"],
  description:
    "An AI-powered collaborative Python code editor that enables real-time code sharing, auto-completion using Mistral API, and live code execution via Pyodide. Features include syntax highlighting with Monaco, a clean Chakra UI interface, and WebSocket support for multi-user collaboration.",
  github: "https://github.com/BharatiPatra/Code_Editor.git",
  link: "https://python-code-editor-dusky.vercel.app/",
},
 
  {
    id: "project-5",
    title: "Photo Collection WebApp",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google OAuth"],
    description:
      "A web application for uploading and managing photo collections.",
    github: "https://github.com/BharatiPatra/pinterest-clone.git",
    link: "https://pinterestclone11.netlify.app/",
  },
   {
  id: "project-6",
    title: "Biriyani Zone",
    technologies: ["React.js"],
    description:
      "A restaurant website showcasing different varieties of Biriyani.",
    github: "https://github.com/BharatiPatra/Restaurant.git",
    link: "https://resturantapplication.netlify.app/",
  },
];

export const techStack = [
  { name: "JavaScript", icon: "💛" },
  { name: "TypeScript", icon: "💙" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Java", icon: "🔥" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🦄" },
  { name: "Tailwind CSS", icon: "🌊" },
];
