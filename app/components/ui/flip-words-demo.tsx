import React from "react";
import { FlipWords } from "./flip-words";

export default function FlipWordsDemo() {
  const words = ["sigur", "rapid", "eficient", "profesional"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Verifică iPhone-ul
        <FlipWords words={words} className="text-[#017AFF]" /> <br />
        cu CODAT.RO
      </div>
    </div>
  );
} 