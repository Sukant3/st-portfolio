"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skiper62  from "@/components/skiper62";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsSection from "@/components/Skills"; // renamed for clarity
import  Projects  from "@/components/Projects";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconAi,
  IconBook,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { FiTool } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";

export default function Home() {
  
  const navItems = [
    {
      name: "Home",
      link: "#HOME",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#ABOUT",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#SKILLS",
      icon: <FiTool className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#PROJECTS",
      icon: <FaFolder className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#CONTACT",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  // 💫 Intro Animation Toggle
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // Adjust for how long intro should show
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      <AnimatePresence mode="wait">
        {showIntro ? (
          // --- INTRO / LOADING SECTION ---
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-[#12001f]"
          >
            <Skiper62 />
          </motion.div>
        ) : (
          // --- MAIN CONTENT ---
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full"
          >
            {/* HERO SECTION */}
            <section id="HOME" className="w-full">
              <Hero />
            </section>

            {/* ABOUT SECTION */}
            <section id="ABOUT" className="w-full">
              <About />
            </section>

            {/* SKILLS SECTION */}
            <section id="SKILLS" className="w-full">
              <SkillsSection />
            </section>

            {/* PROJECTS SECTION */}
            <section id="PROJECTS" className="w-full">
              <Projects />
            </section>

            {/* CONTACT SECTION */}
            <section id="CONTACT" className="w-full">
              <Contact />
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
