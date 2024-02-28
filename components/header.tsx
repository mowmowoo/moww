"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { ActiveSectionContext } from "@/context/active-section-context"

export const Header = () => {
  const value = useContext(ActiveSectionContext)

  return (
    <header className="z-999 relative">
      <motion.div
        className="bg-white bg-opacity-80 w-full h-[4.5rem] fixed top-0
        shadow-lg shadow-black/[0.03] backdrop-blur-[1.5rem]
        border border-white border-opacity-40 rounded-none
        sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full sm:top-6 left-1/2 -translate-x-1/2
        "
        initial={{ y: -100, x: "-50", opacity: 0 }}
        animate={{ y: 0, x: "50", opacity: 1 }}
      ></motion.div>
      <nav
        className="h-12 flex fixed top-[0.15rem] left-1/2 -translate-x-1/2
                  sm:top-[1.7rem] sm:h-[initial] sm:py-0
                    "
      >
        <ul
          className="text-gray-500 font-medium text-[0.9rem] 
                      w-[22rem] flex flex-wrap items-center justify-center gap-y-1
                      sm:gap-5 sm:w-[initial] sm:flex-nowrap
        "
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
            >
              <Link
                className={clsx(
                  "w-full flex items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  >
                    {" "}
                  </motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>

    // <header className="z-999 relative">
    //   <motion.div className="bg-white bg-opacity-80 w-full h-[4.5rem] fixed top-0
    //                    shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
    //                    sm:w-[36rem] sm:rounded-full sm:h-[3.25rem] sm:top-6 -translate-x-1/2 left-1/2
    //                    rounded-none border border-white border-opacity-40
    //                    "
    //                    initial={{ y:-100, x:"-50%", opacity: 0}}
    //                    animate={{y: 0, x:"-50%", opacity: 1}}
    //                    >

    //   </motion.div>

    //   <nav className="h-12 flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2
    //                   sm:top-[1.7rem] sm:h-[initial] sm:py-0
    //                   ">
    //     <ul className="w-[22rem] flex flex-wrap items-center justify-center gap-y-1
    //                   text-[0.9rem] font-medium text-gray-500
    //                   sm:gap-5 sm:flex-nowrap sm:w-[initial]
    //                   ">
    //       {links.map((link)=>
    //       (
    //       <motion.li className="h-3/4 flex items-center justify-center" key={link.hash}
    //             initial={{y:-100, opacity: 0}}
    //             animate={{ y:0, opacity: 1}}
    //             >
    //         <Link className="w-full flex items-center justify-center py-3 px-3" href={link.hash}>{link.name}</Link>
    //       </motion.li>
    //       )
    //       )}
    //     </ul>
    //   </nav>
    // </header>

    // <header className="z-[999] relative">
    //   <motion.div

    //     className="fixed top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2
    //               rounded-none border border-white border-opacity-40 bg-white bg-opacity-80
    //               shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
    //               sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"

    //               initial={{ y: -100, x:"-50%", opacity: 0}}
    //               animate={{  y: 0, x:"-50%", opacity: 1}}

    //   ></motion.div>

    //   <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:py-0 sm:top-[1.7rem] sm:h-[initial]">
    //     <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:h-[initial] sm:flex-nowrap sm:gap-5">
    //       {links.map((link) => (
    //         <motion.li
    //           className="h-3/4 flex items-center justify-center"
    //           key={link.hash}
    //           initial={{ y:-100, opacity: 0}}
    //           animate={{ y:0, opacity: 1}}
    //         >
    //           <Link className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition" href={link.hash}>{link.name}</Link>

    //         </motion.li>
    //       ))}
    //     </ul>

    //   </nav>

    // </header>
  );
};
