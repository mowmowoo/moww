import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section
      className="bg-gray-100 max-w-[42rem]
        border border-black/5 overflow-hidden sm:pr-8 relative
"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="leading-relaxed mt-2 text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
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
      <Image className="absolute top-8 -right-40" src={imageUrl} alt="Project I worked on" quality={95} />
    </section>
  );
}
