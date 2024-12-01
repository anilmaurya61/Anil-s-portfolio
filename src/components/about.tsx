"use client";
import React, { useEffect } from 'react';
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section className='max-w-[45rem] text-center leading-8 
    scroll-mt-28 mb-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}>
      <SectionHeading >About Me</SectionHeading>
      <p className='text-[1rem] mb-3 leading-9 text-justify'>
        Software Engineer at <span className='font-medium text-blue-500'>Sigtuple Technologies</span> with expertise in optimizing AI-based diagnostic systems and
        integrating medical imaging data. Skilled in both frontend and backend development, I have hands-on
        experience with the <span className='font-medium text-blue-500'>MERN stack</span> and have built several full-stack applications. I hold a B.Tech in Computer
        Science and am passionate about leveraging technology to drive innovation.
      </p>
    </motion.section>
  )
}
