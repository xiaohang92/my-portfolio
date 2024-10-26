// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5"
      data-aos="fade-up"
      whileHover={{ scale: 1.05 }}>
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-md mb-4 object-cover"
      />
      <h3 className="text-2xl font-semibold mb-2 dark:text-white">
        {project.title}
      </h3>
      <p className="mb-4 dark:text-gray-300">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline">
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
