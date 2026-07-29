import React from "react";
import Button from "../Button";
import { InfoIconSVG } from "../Icons/AlIcons";

const VideoGenerator = () => {
  const videosUsed = 35;
  const videosTotal = 40;
  const progressPercent = (videosUsed / videosTotal) * 100;

  return (
    <div className="flex flex-col justify-center self-center p-4 w-238 h-27.5 mt-4 opacity-100 border border-[#E0E0E0] rounded-lg bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h2 className="text-sm font-['Inter'] font-semibold text-[#303030]">
            Video Generator
          </h2>
         <InfoIconSVG />
        </div>
        <Button name={"Upgrade Your Plan"} />
      </div>

      <p className="text-sm text-gray-600 font-[11px] items-center">
        Current Plan:{" "}
        <span className="font-semibold text-gray-900">
          Scale - 40 Videos /Month
        </span>
      </p>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-gray-700">
          {videosUsed}/{videosTotal} Videos
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#008060] rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGenerator;
