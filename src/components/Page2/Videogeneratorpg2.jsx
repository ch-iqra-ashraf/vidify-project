import React from "react";
import Button from "../Button";

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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5C9 5.94772 9.44772 5.5 10 5.5C10.5523 5.5 11 5.94772 11 6.5Z"
              fill="#4A4A4A"
            />
            <path
              d="M10.75 9.25C10.75 8.83579 10.4142 8.5 10 8.5C9.58579 8.5 9.25 8.83579 9.25 9.25V13.75C9.25 14.1642 9.58579 14.5 10 14.5C10.4142 14.5 10.75 14.1642 10.75 13.75V9.25Z"
              fill="#4A4A4A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5Z"
              fill="#4A4A4A"
            />
          </svg>
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
