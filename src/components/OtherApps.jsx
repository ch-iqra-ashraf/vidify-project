import React, { useState } from "react";
import AppCard from "./AppCard";
import Button from "./button";
import { allData } from "../util/data";

const OtherApps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === allData.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex flex-col justify-center self-center p-4 w-238 mt-4 opacity-100 border border-[#E0E0E0] rounded-lg bg-white">
      <AppCard
        data={allData[currentIndex]}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
export default OtherApps;
