import React from "react";
import { motion } from "framer-motion";
import { container_title,container_subtitle,child_title,child_subtitle } from "@/constants/animation_configurations";

const HeaderMe = () => {
  const title_words=["Esteban","Piña"]
  const positions_words = ["Sr. Fullstack Developer","||","Tech Lead"]

  return (
    <div className=" flex w-full font-bebas min-h-screen bg-gradient-to-b from-slate-950 from-20% via-slate-500/30 via-40% to-80% to-slate-950 bg-black">
      <header className="flex flex-col text-white w-full items-end justify-center p-16">
        <motion.div
          style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
          variants={container_title}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-fit"
        >
          {title_words.map((word, index) => (
        <motion.span
          variants={child_title}
          style={{ marginRight: "5px" }}
          key={index}
          className="text-9xl"
        >
          {word}
        </motion.span>
      ))}
          <div className="flex">
          {positions_words.map((word, index) => (
        <motion.span
          variants={child_subtitle}
          style={{ marginRight: "5px" }}
          key={index}
          className="text-xl"
        >
          {word}
        </motion.span>
      ))}
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default HeaderMe;
