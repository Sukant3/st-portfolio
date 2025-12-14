"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMedium,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export default function ContactSection() {
  return (
    <section
      id="CONTACT"
      className="relative max-h-screen mt-20 flex flex-col items-center justify-center bg-[#050505] text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-70 -z-10" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6"
      >
        <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          Let's
        </span>
        <span className="bg-gradient-to-r text-purple-600 bg-clip-text ml-3">
          Connect
        </span>

        <p className="text-gray-400 max-w-lg mx-auto text-lg mt-3">
          Feel free to reach out via any of the methods below. I'm always open to new projects and discussions.
        </p>
      </motion.h1>

      {/* Contact Info and Links */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-6xl">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d17] border border-[#1a1a1a] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-600">
            Contact Info
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-purple-600 text-xl" />
              <span>thombaresukant2003@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-purple-600 text-xl" />
              <span>Mumbai, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-purple-600 text-xl" />
              <span>Available on Request</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d17] border border-[#1a1a1a] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-600">
            Find Me Online
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            {[
              {
                name: "GitHub",
                icon: <FaGithub />,
                href: "https://github.com/Sukant3",
              },
              {
                name: "LinkedIn",
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/sukant-thombare-756a7924b/",
              },
              {
                name: "Medium",
                icon: <FaMedium />,
                href: "https://medium.com/@thombaresukant2003/deep-learning-techniques-for-image-segmentation-ee310cf2bcee",
              },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 bg-[#0f0f15] rounded-xl 
                           border border-[#1a1a1a] hover:border-purple-700 
                           transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl text-gray-300 hover:text-purple-700 mb-1">
                  {item.icon}
                </div>
                <p className="text-sm">{item.name}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Sukant Thombare. All Rights Reserved.
      </div>
      <div className="text-gray-500 text-sm text-center">Made with Love.</div>
    </section>
  );
}
