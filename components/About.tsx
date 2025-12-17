"use client";

import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { AuroraText } from "./magicui/aurora-text";
import { BoxReveal } from "./magicui/box-reveal";
import { Button } from "./ui/button";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const About = () => {
  const socialLinks = [
    {
      icon: <IconBrandGmail className="w-6 h-6" />,
      href: "mailto:thombaresukant2003@gmail.com",
      label: "Gmail",
    },
    {
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/sukant-thombare-756a7924b/",
      label: "LinkedIn",
    },
    {
      icon: <IconBrandLeetcode className="w-6 h-6" />,
      href: "https://leetcode.com/u/thombaresukant2003/",
      label: "LeetCode",
    },
    {
      icon: <IconBrandGithub className="w-6 h-6" />,
      href: "https://github.com/Sukant3",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="ABOUT"
      className="relative bg-gradient-to-b from-[#070707] via-[#12001f] to-[#050505] overflow-hidden scroll-smooth"
    >
      <ContainerScroll
        titleComponent={
          <div className="px-4 pt-10 sm:pt-12 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-snug">
              <AuroraText>“Code that speaks, design that inspires.”</AuroraText>
            </h1>
            <p className="text-3xl sm:text-4xl md:text-6xl mt-4 font-bold text-transparent bg-clip-text bg-white">
              Code • Create • Innovate
            </p>
          </div>
        }
      >
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-h-[90vh] md:min-h-[90vh] px-5 sm:px-8 md:px-16 gap-8 md:gap-12 mt-6 sm:mt-0">
          {/* Image */}
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-freelancer-software-developer-programmer-coder-illustrator-png-image_13076685.png"
              alt="Developer Illustration"
              className="rounded-2xl w-[60%] sm:w-[50%] md:w-[80%] object-contain shadow-lg shadow-black hover:scale-105 transition-transform duration-500"
              draggable={false}
            />
          </div>

          {/* Text + Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <BoxReveal boxColor="#7600D1" duration={0.5}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Full-Stack Developer<span className="text-[#46d6e6]">.</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor="#7600D1" duration={0.5}>
              <p className="mt-1 text-base sm:text-lg md:text-xl text-gray-300">
                Computer <span className="text-[#B107CF] font-semibold">Engineer</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor="#7600D1" duration={0.5}>
              <div className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed space-y-2">
                <p>
                  → Passionate about
                  <span className="font-semibold text-[#A42EFF]"> Full-Stack Development </span>
                  and
                  <span className="font-semibold text-[#5C00A3]"> Artificial Intelligence</span>.
                </p>
                <p>
                  → Experienced in building scalable and user-friendly applications with modern tech stacks.
                </p>
                <p>→ Always eager to learn, adapt, and innovate on impactful projects.</p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor="#7600D1" duration={0.5}>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-8">
                {/* <Button className="px-6 py-3 text-base rounded-lg bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 transition-all duration-300 shadow-md shadow-purple-700/20">
                  Explore
                </Button> */}
                <InteractiveHoverButton >Explore</InteractiveHoverButton>
              </div>
            </BoxReveal>

            {/* Social Buttons */}
            <BoxReveal boxColor="#7600D1" duration={0.6}>
              <div className="flex justify-center md:justify-start gap-2 mt-6 flex-wrap ">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 border border-white hover:border-purple-400 text-gray-300 hover:text-white transition-all duration-300  "
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </BoxReveal>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default About;
