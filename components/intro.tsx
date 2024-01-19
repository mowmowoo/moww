"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <section>
      <div className=" flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full 
              border-white border-[0.35rem] shadow-xl object-cover
            "
            />
          </motion.div>

          <span
            className="
          absolute 
          bottom-0 right-0 text-4xl
      
          "
          >
            👋
          </span>
        </div>
      </div>

      <p>
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </p>
    </section>
  );
};
