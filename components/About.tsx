import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import { AuroraText } from './magicui/aurora-text'

const About = () => {
  return (
    <div>

    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {/* "Code that speaks, design that inspires." */}
               <AuroraText> "Code that speaks, design that inspires."</AuroraText>
              
               <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
               <p> 'Code Create Innovate'</p>
              </span>
            </h1>
          </>
        }
      >
        
        <img
          src={`https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-freelancer-software-developer-programmer-coder-illustrator-png-image_13076685.png`}
          alt="hero"
          height={25}
          width={300}
          className="mx-5 mt-3 rounded-2xl object-cover object-left-top "
          draggable={false}
        />
      </ContainerScroll>
    </div>





    </div>
  )
}

export default About