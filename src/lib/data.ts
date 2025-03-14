import type { ProjectType } from "./types";

export const projects: ProjectType[] = [
  {
    id: "project-1",
    title: "Job Portal",
    technologies: ["React", "Tailwind CSS", "Supabase", "Clerk", "Shadcn UI"],
    description:
      "A job portal platform allowing users to find and post job listings.",
    github: "",
    link: "",
  },
  {
    id: "project-2",
    title: "Uber Like App",
    technologies: ["React", "Tailwind CSS", "Express", "Mongoose"],
    description:
      "A full-stack Uber-like application with real-time ride booking, driver and passenger authentication, live location tracking, and fare estimation.",
    github: "",
    link: "",
  },
  {
    id: "project-3",
    title: "Blog with Appwrite",
    technologies: ["React", "Appwrite", "Tailwind CSS"],
    description: "A blogging platform utilizing Appwrite as a backend service.",
    github: "",
  },
  {
    id: "project-4",
    title: "YouTube Backend",
    technologies: ["MongoDB", "Express.js", "Node.js"],
    description: "A backend service replicating YouTube-like functionalities.",
  },
  {
    id: "project-5",
    title: "Biriyani Zone",
    technologies: ["React.js"],
    description:
      "A restaurant website showcasing different varieties of Biriyani.",
    github: "",
    link: "",
  },
  {
    id: "project-6",
    title: "Photo Collection WebApp",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google OAuth"],
    description:
      "A web application for uploading and managing photo collections.", 
    github: "",
    link: "",
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
