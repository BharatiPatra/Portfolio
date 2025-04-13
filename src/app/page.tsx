"use client";

import type React from "react";
import { useState, useRef, Suspense } from "react";
import Scene from "@/components/scene";
import Loading from "@/components/loading";
import ProjectsSection from "@/components/project-section";
import ContactSection from "@/components/contact-section";
import TechStackSection from "@/components/tech-stack-section";
import { motion } from "framer-motion";
import ProfileCard from "@/components/profile_card";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <main className="relative bg-black text-white">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<Loading />}>
          <Scene />
        </Suspense>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-white font-bold text-xl cursor-pointer sm:cursor-default"
            onClick={() => {
              if (window.innerWidth < 640) {
                setMobileMenuOpen((prev) => !prev);
              } else {
                scrollToSection(aboutRef);
              }
            }}
          >
            <span className="text-primary">3D</span> <span>Portfolio</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-4">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="px-3 py-2 hover:text-gray-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="px-3 py-2 hover:text-gray-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(techStackRef)}
              className="px-3 py-2 hover:text-gray-400 transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="px-3 py-2 hover:text-gray-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden flex flex-col items-start px-4 pb-4 space-y-2 bg-black">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(techStackRef)}
              className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Content Sections */}
      <div className="relative z-10">
        <section
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center pt-24 px-4"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <ProfileCardWithAnimation />
            </div>
          </div>
        </section>

        <section
          ref={projectsRef}
          className="min-h-screen flex items-center justify-center py-16 bg-black/80"
        >
          <ProjectsSection />
        </section>

        <section
          ref={techStackRef}
          className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-black/80 to-black/0"
        >
          <TechStackSection />
        </section>

        <section
          ref={contactRef}
          className="min-h-screen flex items-center justify-center py-10 w-full px-4 sm:px-6 lg:px-8"
        >
          <ContactSection />
        </section>
      </div>
    </main>
  );
}

function ProfileCardWithAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ProfileCard />
    </motion.div>
  );
}
