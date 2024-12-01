"use client";
import React, { useState, useRef } from 'react';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './sectionHeading';

export default function ExperienceSection() {
  const { ref } = useSectionInView("Experience");
  const [selectedTag, setSelectedTag] = useState<"Freelancing" | "Reverr">(experiencesData[0].tag);

  // Filter the experiencesData based on the selected tag
  const selectedExperience = experiencesData.find(experience => experience.tag === selectedTag);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 ">
      <SectionHeading>My Experience</SectionHeading>
      {/* main-container */}
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col gap-7 sm:max-w-[50%] justify-center items-center">
          {/* Roles */}
          <div className="flex flex-row gap-2 ">
            {experiencesData.map((experience, index) => (
              <button
                key={index}
                className={selectedTag === experience.tag ? "px-5 py-3 rounded-xl border-black bg-black/10 dark:bg-white/10 text-pink-700 dark:text-blue-500 font-medium" :
                  "px-5 py-3 rounded-xl border-black bg-white dark:bg-white/10 hover:scale-110 transition ease-in-out duration-300"}
                onClick={() => setSelectedTag(experience.tag)}
              >
                {experience.tag}
              </button>
            ))}
          </div>
          {/* role description */}
          <div className="flex flex-col gap-2 dark:bg-white/10 dark:text-white/80 rounded-lg border dark:border-black/5 sm:p-6 p-4 
          sm:max-w-[80%] sm:ml-12 shadow shadow-pink-200 dark:shadow-none transition duration-400 ease-in">
            <h1 className="dark:text-white text-black sm:text-xl text-md font-semibold">{selectedExperience && selectedExperience.title}</h1>
            <h3 className="sm:text-md text-xs">{selectedExperience && selectedExperience.date}</h3>
            <p className="dark:text-[#D6D6D6] text-black/90 sm:text-lg text-sm">
              {selectedExperience && selectedExperience.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
