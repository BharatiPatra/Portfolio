"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="container mx-auto  px-4">
      <motion.div
        className="max-w-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* About Me Text */}
        <motion.div
          className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl p-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I am a passionate and motivated software developer with a strong
              foundation in Java and JavaScript. With a keen interest in web
              development and backend technologies, I enjoy building efficient,
              scalable, and user-friendly applications. I have hands-on
              experience with object-oriented programming, data structures, and
              algorithmic problem-solving.
            </p>
            <p>
              My focus is on delivering exceptional user experiences through
              clean code and innovative design solutions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
