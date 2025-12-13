"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiScikitlearn,
} from "react-icons/si";

const projects = [
  {
    category: "Blockchain",
    title: "BlockMeet",
    time: "Mar 2024 – May 2024",
    image: "/images/im1.png",
    github: "https://github.com/example/blockmeet",
    visit: "https://blockmeet.com",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    description:
      "Built a decentralized video conferencing solution addressing privacy, scalability, and single-point-of-failure issues.",
    techIcons: [<FaReact className="text-cyan-400" key="r" />, <FaNodeJs className="text-green-600" key="n" />, <SiMongodb className="text-green-800" key="m" />, <SiExpress className="text-black" key="e" />],
  },
  {
    category: "Finance",
    title: "HostelBank",
    time: "Jan 2024 – Feb 2024",
    image: "/images/im2.png",
    github: "https://github.com/Sukant3/VMKB_Hostel",
    visit: "https://hostelbank.com",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    description:
      "Manage group finances, track transactions, and split expenses with speed and security improvements.",
    techIcons: [<FaReact className="text-cyan-400" key="r" />, <FaNodeJs className="text-green-600" key="n" />, <SiMongodb className="text-green-800" key="m" />, <SiExpress className="text-black" key="e" />],
  },
  {
    category: "News",
    title: "BytePress",
    time: "Nov 2023 – Dec 2023",
    image: "/images/im3.png",
    github: "https://github.com/example/bytepress",
    visit: "https://bytepress.com",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    description:
      "Real-time news app using NewsAPI with infinite scroll and smooth UI.",
    techIcons: [<FaReact className="text-cyan-400" key="r" />, <SiBootstrap className="text-blue-600" key="b" />],
  },
 
  {
    category: "Music",
    title: "SoundWave",
    time: "Jul 2023 – Aug 2023",
    image: "/images/im4.png",
    github: "https://github.com/Sukant3/SoundWave",
    visit: "https://sound-wave-chi.vercel.app/",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    description:
      "SoundWave is a sleek and functional Spotify-inspired music streaming web app built using modern web technologies.",
    techIcons: [<FaReact className="text-cyan-400" key="r" />, <SiTailwindcss className="text-cyan-300" key="t" />],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section className="relative h-full w-full bg-gradient-to-b from-[#070707] via-[#12001f] to-[#050505] overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-white">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg mt-3">
            Explore my latest work across RealTime, fintech, and more ↓
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[90vh] overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="relative w-full flex justify-center items-center">
          {projects.map((proj, index) => {
            const offset = index - current;
            const absOffset =
              ((offset % projects.length) + projects.length) % projects.length;
            const isActive = index === current;

            return (
              <motion.div
                key={index}
                className="absolute transition-all duration-800 ease-in-out"
                animate={{
                  scale: isActive ? 1.1 : 0.8,
                  x: absOffset * 400 - 400,
                  zIndex: isActive ? 10 : 0,
                  opacity: isActive ? 1 : 0.4,
                }}
              >
                <div className="relative w-[320px] md:w-[380px] h-[480px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                  
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="absolute inset-0  w-full h-full object-fit"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${proj.gradient} opacity-6`}></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 p-6 text-white">
                    <p className="text-sm font-semibold  text-white/80 mb-1">
                      {proj.category}
                    </p>
                    <h3 className="text-3xl font-bold mb-2 text-[#ffffff] ">{proj.title}</h3>
                    <p className="text-sm text-purple/70 mb-4 line-clamp-2">
                      {proj.description}
                    </p>

                    <button
                      onClick={() => setSelected(index)}
                      className="px-5 py-2 bg-gradient-to-r from-[#A855F7] to-[#4e1181] text-white rounded-xl font-semibold hover:scale-90 hover:shadow-[#A855F7]/40 transition-all"
                    >
                      View Details
                    </button>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 pb-10">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${current === i
                ? "bg-purple-600 scale-125"
                : "bg-white/30 hover:bg-white/50"
              }`}
          ></div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 border border-purple-500/30 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-8 md:p-12"
            >
              {/* Close Button */}
              <button
                className="absolute md:top-5 md:right-5 top-1 right-2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xl font-bold transition"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* Content Layout */}
              <div className="flex flex-col md:flex-row  mt-3 gap-8">
                {/* Left Image */}
                <div className="w-full md:w-1/2 h-64 md:h-80 relative  rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
                  <img
                    src={projects[selected].image}
                    alt={projects[selected].title}
                    className="w-full h-full object-fit"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1">
                  <h3 className="text-4xl font-black text-white mb-2">
                    {projects[selected].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-5">
                    {projects[selected].description}
                  </p>

                  {/* Icons */}
                  <div className="flex space-x-5 text-4xl text-purple-400 mb-8">
                    {projects[selected].techIcons.map((icon, i) => (
                      <span key={i} className="hover:text-purple-300 transition">
                        {icon}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {projects[selected].github && (
                      <a
                        href={projects[selected].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {projects[selected].visit && (
                      <a
                        href={projects[selected].visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#A855F7] to-[#4e1181] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105`}
                      >
                        <FaExternalLinkAlt /> Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
