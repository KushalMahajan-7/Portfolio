"use client";

import { SparklesIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImageUrl } from "../../utils";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* LEFT SECTION */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        {/* TOP BADGE WITH RESUME BUTTON */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center justify-between py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* Left side */}
          <div className="flex items-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Portfolio
            </h1>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-1 px-3 py-1 text-[12px] rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-80 transition"
          >
            <ArrowDownTrayIcon className="h-3 w-3" />
            Resume
          </a>
        </motion.div>

        {/* HEADING */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
      </div>

      {/* RIGHT SECTION IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};