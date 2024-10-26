// src/components/SecretMessage.tsx
"use client";

import { useEffect, useState } from "react";

const SecretMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "m") {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 left-5 bg-gray-800 text-white p-4 rounded shadow-lg">
          <p>🎉 You found the secret message! 🎉</p>
        </div>
      )}
    </>
  );
};

export default SecretMessage;
