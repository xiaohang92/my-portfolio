// src/components/Header.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 bg-gray-800 text-white z-50">
      <h1 className="text-xl font-bold">
        <Link href="/">My Portfolio</Link>
      </h1>
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/projects" className="hover:text-gray-400">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <a
          href="https://github.com/yourusername" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400">
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400">
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com/yourusername" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400">
          <FaTwitter size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;
