"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAngular,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";

// Skill data organized by category
const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
     { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "React", icon: <FaReact className="text-cyan-300" /> },
      
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
   
   
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Angular", icon: <FaAngular className="text-red-500" /> },
  ],
  Backend: [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  ],
  
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-red-500" /> },
  
  ],
};

// Skill card
const SkillCard = ({ name, icon }) => (
   <motion.div
    whileHover={{ scale: 1.08 }}
    className="flex flex-col items-center justify-center w-[100px] sm:w-[150px] h-[80px]
               bg-[#101015]/80 px-5 py-4 rounded-2xl border border-[#2a2a2a] hover:border-[#65079C]/70 ]
               backdrop-blur-sm hover:shadow-lg hover:shadow-purple-700/30
               transition-all duration-300 cursor-pointer"
  >
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-sm font-semibold text-gray-200">{name}</p>
  </motion.div>
);

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const tabs = Object.keys(skillCategories);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#070707] via-[#12001f] to-[#050505] text-white flex flex-col items-center justify-start py-20 px-6">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px]     blur-[200px] rounded-full -z-10"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-12 leading-tight bg-gradient-to-r from-[#E9D5FF] via-[#A855F7] to-[#6B21A8] text-transparent bg-clip-text"
      >
        Technical Skills
      </motion.h1>

      {/* Navbar Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {tabs.map((tab) => (
           <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border
              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#A855F7] to-[#4e1181] text-white shadow-md shadow-purple-700/30"
                  : " text-gray-400 hover:text-[#C084FC] hover:border-[#9333EA]/70"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
          >
            {skillCategories[activeTab].map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
