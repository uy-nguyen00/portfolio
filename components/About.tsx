"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a fourth-year {" "}
        <span className="font-medium">AI major</span> at {" "}
        <span className="font-medium">EPITECH Montpellier</span> (FRANCE),
        I've spent two years immersed in {" "}
        <span className="font-medium">web development</span> during my apprenticeship.
      </p>

      <p>
        My focus has been on {" "}
        <span className="font-medium italic underline">PHP</span> with {" "}
        <span className="font-medium italic underline">MySQL/Oracle</span> for backend and {" "}
        <span className="font-medium italic underline">AngularJS/Vue.js</span> for frontend, with exposure to {" "}
        <span className="font-medium italic underline">Node.js, Typescript, PostgreSQL and React.</span> {" "}
        Also, I have experience with {" "}
        <span className="font-medium italic underline">Docker and Github Actions.</span> {" "}
      </p>

      <p>Now, I'm looking for opportunities for my apprenticeship as a full-stack Javascript developer.</p>
    </motion.section>
  )
};