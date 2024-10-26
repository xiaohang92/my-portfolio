// src/app/layout.tsx
"use client";

import "./globals.css";
import { ReactNode, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../components/ScrollToTop";
import SecretMessage from "../components/SecretMessage";
import { AnimatePresence } from "framer-motion";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio built with Next.js, Tailwind CSS, and TypeScript.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <main className="mt-16">{children}</main>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
        <SecretMessage />
      </body>
    </html>
  );
};

export default RootLayout;
