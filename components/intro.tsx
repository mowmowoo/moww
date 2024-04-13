"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "./hooks";

export const Intro = () => {
  const { ref } = useSectionInView('Home')
  // const { ref, inView } = useInView({ threshold: 0.5 });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // // console.log(inView);

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Home");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center 
                        sm:mb-0
                          scroll-mt-[100rem]
                          "
    >
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

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-1 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm cccccc.</span> I'm a{" "}
        <span className="font-bold">ccccc</span> with{" "}
        <span className="font-bold">8 years</span> ccccccy building{" "}
        <span className="italic">ccccs</span>. My focus is{" "}
        <span className="underline">cccc (cccc)</span>.
      </motion.h1>

      <motion.div
        className="text-lg font-medium flex flex-col sm:flex-row items-center justify-center px-4 gap-2 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white rounded-full flex items-center px-7 py-3 gap-2 
                        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
                        outline-none group"
        >
          contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white flex items-center px-7 py-3 gap-2 rounded-full
                        outline-none cursor-pointer border border-black/10
                        group focus:scale-110 hover:scale-110 active:scale-55 transition
                    "
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
        <a
          className="bg-white text-gray-700 rounded-full flex items-center p-4 gap-2
                      cursor-pointer border border-black/10
                      focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950
                      
          "
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 text-[1.35rem] rounded-full flex items-center p-4 gap-2
                      cursor-pointer border border-black/10
                     focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950
                     
        

        "
          href="https://linkedin.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
