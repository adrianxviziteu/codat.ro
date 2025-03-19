"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const FlipWords = ({
  words,
  duration = 2000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Find the longest word to set the container width
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // Change word after fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        // Start fade in
        setIsVisible(true);
      }, 250);
    }, duration);
    
    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className={cn("relative inline-block", className)}>
      {/* Invisible element to maintain consistent width */}
      <span className="opacity-0 absolute">{longestWord}.</span>
      
      <div className="relative overflow-hidden">
        <span 
          style={{
            transition: 'all 250ms ease',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0)' : 'blur(2px)',
            transform: isVisible ? 'translateY(0)' : 'translateY(-1px)',
            display: 'inline-block',
            fontWeight: 'bold'
          }}
        >
          {words[currentIndex]}
          <span style={{ color: '#017AFF' }}>.</span>
        </span>
      </div>
    </div>
  );
}; 