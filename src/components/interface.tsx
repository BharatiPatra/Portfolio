"use client";
import React, { useState, useEffect, ReactNode } from "react";
import type { ProjectType } from "../lib/types";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import ContactForm from "./contact-form";
import AboutSection from "./about-section";

interface InterfaceProps {
  activeProject: ProjectType | null;
  setActiveProject: (project: ProjectType | null) => void;
  section: string;
  setSection: (section: string) => void;
}

export default function Interface({ section, setSection }: InterfaceProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [section]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Header navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 pointer-events-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl">
            <span className="text-primary">3D</span> Portfolio
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavButton
              icon={<Briefcase className="h-4 w-4 mr-2" />}
              label="Projects"
              active={section === "projects"}
              onClick={() => setSection("projects")}
            />
            <NavButton
              icon={<User className="h-4 w-4 mr-2" />}
              label="About"
              active={section === "about"}
              onClick={() => setSection("about")}
            />
            <NavButton
              icon={<Mail className="h-4 w-4 mr-2" />}
              label="Contact"
              active={section === "contact"}
              onClick={() => setSection("contact")}
            />
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md p-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              <MobileNavButton
                icon={<Briefcase className="h-5 w-5 mr-3" />}
                label="Projects"
                active={section === "projects"}
                onClick={() => setSection("projects")}
              />
              <MobileNavButton
                icon={<User className="h-5 w-5 mr-3" />}
                label="About"
                active={section === "about"}
                onClick={() => setSection("about")}
              />
              <MobileNavButton
                icon={<Mail className="h-5 w-5 mr-3" />}
                label="Contact"
                active={section === "contact"}
                onClick={() => setSection("contact")}
              />
            </nav>
          </div>
        )}
      </header>

      {/* Content sections */}
      {section === "about" && <AboutSection />}
      {section === "contact" && <ContactForm />}

      {/* Social links */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pointer-events-auto">
        <div className="container mx-auto flex justify-center md:justify-end">
          <div className="flex space-x-2">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary"
            >
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary"
            >
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Navigation button components
function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? "default" : "ghost"}
      size="sm"
      onClick={onClick}
      className={active ? "" : "text-gray-300 hover:text-primary"}
    >
      {icon}
      {label}
    </Button>
  );
}

function MobileNavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? "default" : "ghost"}
      className={`w-full justify-start ${
        active ? "" : "text-gray-300 hover:text-primary"
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  );
}
