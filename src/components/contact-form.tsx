"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 md:p-8 pointer-events-auto">
      <div className="bg-black/80 backdrop-blur-md border border-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-400 mb-4">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-gray-900/50 border-gray-700"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-gray-900/50 border-gray-700"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                required
                className="bg-gray-900/50 border-gray-700"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
