"use client";
import React from 'react'
import { RetroGrid } from './magicui/retro-grid'
import { FaDownload, FaMoon, FaSun } from 'react-icons/fa'
import { AuroraText } from './magicui/aurora-text'
import { WordRotate } from './magicui/word-rotate'
import { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconBook, IconBriefcase, IconCapRounded, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import TransitionLink from './TransitionLink';




const Hero = () => {
  
    return (
        <div className='h-full'>

            <div className="relative  w-full">
              
                 

                <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-black">
                    <p className='text-3xl'>Hey! <AuroraText>there I' am</AuroraText> </p>
                    {/* <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                   Sukant <AuroraText>Thombare</AuroraText>
                </h1> */}
                    <span className=" sm:text-4xl md:text-6xl lg:text-7xl pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b mt-5 from-[#f4f4f4] via-[#b507cf] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                        Sukant Thombare
                    </span>

                    <WordRotate
                        className="text-4xl font-bold text-white mt-3"
                        words={["AI Enthusiast", "Web Developer", "Clean Code Practices"]}
                    />




                    <a href="/Resume.pdf" download className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-4 mt-10 " >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Download CV <FaDownload className='ml-3 text-[#507cf]' />
                        </span>

                    </a>


                    <RetroGrid />
                </div>  
            </div>


















        </div>
    )
}

export default Hero