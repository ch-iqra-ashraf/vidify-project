import React from "react";
import { DotsIconSVG } from "./Icons/AlIcons";
import Button from "./button";

const FeatureCard = ({
  image,
  heading,
  description,
  buttonName,
  buttonIcon,
}) => {
  return (
    <div className="flex flex-row self-center w-full max-w-238 h-auto min-h-43.5 mt-4 opacity-100 border border-[#E0E0E0] rounded-lg bg-white overflow-hidden">
      <div className="w-79.5 shrink-0">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 justify-center p-6">
        <div className="flex flex-row justify-between items-center w-full mb-1">
          <span className="text-sm font-medium">{heading}</span>
          <DotsIconSVG />
        </div>

        <p className="font-[13px] text-[#616161]">{description}</p>
        <div className="mt-3">
          <Button name={buttonName} Icon={buttonIcon} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
