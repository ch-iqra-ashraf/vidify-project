import React from "react";
import Button from "../Button";
import { ArrowLeftIconSVG, ArrowRightIconSVG } from "../Icons/AlIcons";

const AppCard = ({ data, onPrev, onNext }) => {
  return (
    <div className="flex flex-col items-center border border-[#E0E0E0] bg-white w-max-[238px] rounded-lg overflow-hidden">
      <div className="flex flex-row items-stretch border border-[#E0E0E0] bg-white rounded-lg overflow-hidden flex-1">
        <div className="w-100 shrink-0">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col p-6">
          <p className="text-sm font-semibold text-gray-900">{data.title}</p>
          <p className="text-sm text-[#616161] mt-2">{data.description}</p>

          <ul className="mt-3 space-y-1">
            {data.bullets.map((point, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex items-start gap-2"
              >
                <span>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 self-start">
            <Button name={"Get Started"} />
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 px-6 py-3 mt-5 bg-[#F5F5F5] border-t border-[#EBEBEB]">
          <button
            onClick={onPrev}
            className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-200/60 rounded-md transition-colors"
            aria-label="Previous Item"
          >
            <ArrowLeftIconSVG />
          </button>
          <button
            onClick={onNext}
            className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-200/60 rounded-md transition-colors"
            aria-label="Next Item"
          >
            <ArrowRightIconSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
