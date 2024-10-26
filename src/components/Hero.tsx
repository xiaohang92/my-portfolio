// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-5xl font-bold mb-4">
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl">
        I'm a Web Developer with a passion for creating interactive experiences.
      </motion.p>
    </section>
  );
};

export default Hero;
