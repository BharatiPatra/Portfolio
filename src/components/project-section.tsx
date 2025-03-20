"use client";

import { motion } from "framer-motion";
import { projects } from "../lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  if (!Array.isArray(projects) || projects.length === 0) {
    return <p className="text-center text-gray-400">No projects available.</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">My Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects I&apos;ve worked on, showcasing my skills and
          experience in web development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="bg-black/60 backdrop-blur-md border-gray-800 overflow-hidden h-full text-white">
        <CardHeader className="pb-2">
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-gray-400">
            {project.description}
          </CardDescription>

          <div className="flex flex-wrap gap-2">
            {(Array.isArray(project.technologies)
              ? project.technologies
              : []
            ).map((tech: string) => (
              <span
                key={tech}
                className="text-xs bg-primary/20 text-gray-300 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-all"
              >
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-all"
              >
                Live Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
