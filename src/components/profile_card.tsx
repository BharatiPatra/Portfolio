"use client";

import type React from "react";
import { useState, useRef, JSX } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AboutSection from "./about-section";

export default function ProfileCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const backgroundTransform = {
    x: useTransform(xSpring, [-100, 100], [40, -40]),
    y: useTransform(ySpring, [-100, 100], [40, -40]),
  };

  const contentTransform = {
    x: useTransform(xSpring, [-100, 100], [30, -30]),
    y: useTransform(ySpring, [-100, 100], [30, -30]),
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = ((e.clientX - centerX) / (rect.width / 2)) * 100;
    const distanceY = ((e.clientY - centerY) / (rect.height / 2)) * 100;
    x.set(distanceX);
    y.set(distanceY);
    setMousePosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  interface SocialLink {
    icon: JSX.Element;
    link: string;
    tooltip: string;
  }

  const socialLinks: SocialLink[] = [
    {
      icon: <Linkedin size={24} />,
      link: "https://linkedin.com/in/ishwa-bharati-521001304",
      tooltip: "LinkedIn",
    },
    {
      icon: <Github size={24} />,
      link: "https://github.com/BharatiPatra",
      tooltip: "GitHub",
    },
    {
      icon: <Mail size={24} />,
      link: "mailto:ishwabharati@gmail.com",
      tooltip: "Email",
    },
    {
      icon: <Download size={24} />,
      link: "/resume.pdf",
      tooltip: "Download Resume",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div
        ref={cardRef}
        className="relative w-72 h-96"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden"
          style={{ x: backgroundTransform.x, y: backgroundTransform.y }}
        >
          <div className="absolute top-3 left-3 w-4 h-4 rounded-full border-2 border-blue-400"></div>
          <div className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-blue-400"></div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6"
          style={{ x: contentTransform.x, y: contentTransform.y }}
        >
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-3xl bg-white overflow-hidden shadow-lg">
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-xl p-4 text-center">
            <h2 className="text-white text-xl font-bold tracking-wide mb-1">
              E Bharati Patra
            </h2>
            <p className="text-gray-300 mb-4">Full Stack Developer</p>

            <div className="flex justify-center space-x-2">
              {socialLinks.map((item, index) => (
                <SocialButton key={index} {...item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <AboutSection />
    </div>
  );
}

function SocialButton({
  icon,
  link,
  tooltip,
}: {
  icon: React.ReactNode;
  link: string;
  tooltip: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-600 border-gray-700 hover:bg-gray-700 transition-all"
          >
            {icon}
          </a>
        </TooltipTrigger>
        <TooltipContent side="top">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
