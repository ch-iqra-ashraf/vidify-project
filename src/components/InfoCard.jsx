import React from "react";
import { ArrowIconSVG } from "./Icons/AlIcons";


const InfoCard = ({ Icon, heading, description, onArrowClick, bgColor = "#008060" }) => {
  return (
    <div className="flex flex-row items-center justify-between w-233   p-4 rounded-lg bg-white">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ backgroundColor: bgColor }}
        >
          {Icon && <Icon />}
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">{heading}</p>
          <p className="font-[13px] text-[#616161]">{description}</p>
        </div>
      </div>

      <button
        onClick={onArrowClick}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E0E0E0] hover:bg-gray-50 transition-colors"
      >
        <ArrowIconSVG />
      </button>
    </div>
  );
};

export default InfoCard;

