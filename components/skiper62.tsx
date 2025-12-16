"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

// Hook for looping through text
const useLoop = (delay = 2300) => {
  const [key, setKey] = useState(0);
  const incrementKey = useCallback(() => setKey((prev) => prev + 1), []);
  useEffect(() => {
    const interval = setInterval(incrementKey, delay);
    return () => clearInterval(interval);
  }, [delay, incrementKey]);
  return { key };
};

// Modern animated big text component
const Skiper62 = () => {
  const { key } = useLoop(500);

  const words = useMemo(
    () => [
      "नमस्ते!",
      "नमस्कार",
      "console.log('Hi')",
      "<Developer />",
      "npm run dev",
      "git commit -m", 
      "{ Code: Life }",
      // "function create()"
      
    ],
    []
  );

  const currentWord = useMemo(
    () => words[key % words.length],
    [words, key]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <AnimatePresence mode="wait">
        <motion.h1
          key={key}
          initial={{
            opacity: 0,
            y: 6,
            
          }}
          animate={{
            opacity: 1,
            y: 0,
            
            transition: { duration: 0.55, ease: "easeInOut" }
          }}
          exit={{
            opacity: 0,
            y: -16,
         
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          style={{
            filter: "blur(0px)",
          }}
          className="select-none text-5xl md:text-8xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-white animate-gradient-move">
          {currentWord}
        </motion.h1>
      </AnimatePresence>
      <p className="mt-8 text-gray-300 text-lg md:text-xl text-center max-w-xl">
        I create interactive, modern web experiences. This is my portfolio highlight.
      </p>
      <style>{`
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export { Skiper62 };
export default Skiper62;
