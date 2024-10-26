// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-6">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={192}
              height={192}
            />
          </motion.div>
          <div>
            <p className="mb-4 dark:text-gray-300">
              With over two years of experience in PHP and Laravel, I've
              transitioned from a five-year stint in a contact centre to web
              development. My studies in actuarial science have honed my logical
              and mathematical reasoning skills, enabling me to tackle complex
              problems efficiently.
            </p>
            <p className="mb-4 dark:text-gray-300">
              When I'm not coding, I enjoy working out, playing games, and
              listening to music. One of my favorite artists is Ado, a talented
              Japanese singer.
            </p>
            {/* Add more personal touches or animated elements */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
