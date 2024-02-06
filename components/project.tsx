"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.section ref={ref}
      className="bg-gray-100 max-w-[42rem]
        border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]
        mb-3 sm:mb-8 group even:pl-8 hover:bg-gray-200 transition 
        "
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
        }}
    >
      <div
        className="pt-4 pb-7 px-5 sm:pl-10  sm:pt-10 sm: pr-2 sm:max-w-[50%]
                      flex flex-col h-full group-even:ml-[18rem]
                      "
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="leading-relaxed mt-2 text-gray-700 pl-50">
          {description}
        </p>
        <ul
          className="flex flex-wrap mt-4 gap-2 
                        sm:mt-auto"
        >
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] text-[0.7rem] text-white px-3 py-1 
                        uppercase tracking-wider rounded-full
                    "
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        group-even:right-[initial] group-even:-left-40
        transition
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-hover:scale-[1.04]
        "
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
      />
    </motion.section>
  );
}