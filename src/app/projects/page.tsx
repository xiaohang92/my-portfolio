// src/app/projects/page.tsx
"use client";

import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A web application built with Next.js and Tailwind CSS.",
    link: "https://github.com/yourusername/project-one",
    image: "/images/project1.png",
  },
  {
    title: "Project Two",
    description: "An API developed using Laravel and PHP.",
    link: "https://github.com/yourusername/project-two",
    image: "/images/project2.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
