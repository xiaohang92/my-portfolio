// src/app/page.tsx
"use client";

import Hero from "../components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-lg mb-4 dark:text-gray-300">
            I'm a web developer with a background in actuarial science and a
            passion for building interactive web applications.
          </p>
          <Link href="/about">
            <a className="text-blue-500 dark:text-blue-400 hover:underline">
              Learn More
            </a>
          </Link>
        </div>
      </section>
      {/* Add more sections as desired */}
    </>
  );
};

export default Home;
