"use client";

import { motion } from "framer-motion";
import { techStack } from "../lib/data";

export default function TechStackSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <TechItem key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
}

function TechItem({
  tech,
  index,
}: {
  tech: { name: string; icon: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 },
      }}
      className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl p-4 h-32"
    >
      <span className="text-4xl mb-2">{tech.icon}</span>
      <span className="font-medium text-center">{tech.name}</span>
    </motion.div>
  );
}
