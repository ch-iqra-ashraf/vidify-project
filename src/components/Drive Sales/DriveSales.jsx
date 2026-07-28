import React from "react";
import InfoCard from "./InfoCard";
import {
  DocumentIconSVG,
  SupportIconSVG,
  WalkThroughIconSVG,
} from "../Icons/AlIcons";

const DriveSales = () => {
  return (
    <div className="w-full max-w-238 mt-4 mx-auto border border-[#E0E0E0] rounded-xl bg-[#F9F9F9] p-4">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-bold text-[#1A1A1A]">
          Drive More Sales with Vidify AI Product Videos{" "}
        </h2>
        <p className="text-sm font-normal text-[#555555]">
          Transform product marketing & your brand presence with stunning
          videos.
        </p>
      </div>
      <div>
        <InfoCard
          Icon={DocumentIconSVG}
          heading="Documentation"
          description="Read our step-by-step guidelines to explore and master every Vidify feature."
          bgColor="#29845A"
        />

        <InfoCard
          Icon={SupportIconSVG}
          heading="Support"
          description="Our team is always ready to help reach out anytime to solve any issue."
          bgColor="#998A00"
        />
        <InfoCard
          Icon={WalkThroughIconSVG}
          heading="Vidify Walkthrough"
          description="Book a session with our experts and learn how to get the most out of Vidify."
          bgColor="#8051FF"
        />
      </div>
    </div>
  );
};

export default DriveSales;
