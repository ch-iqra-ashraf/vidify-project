import React from "react";

const Topbar = () => {
  return (
    <div className="flex gap-3 h-9 px-6">
      <div className="flex items-center w-full max-w-4xl rounded-lg h-9.5">
        <img src="images/vidify logo.svg" alt="V Logo" />
        <span className="text-lg font-semibold text-[#1A1A3C]">Vidify</span>
      </div>
    </div>
  );
};

export default Topbar;
