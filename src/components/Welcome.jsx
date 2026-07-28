import React from 'react'

const Welcome = () => {
  return (
    <div className="flex flex-col align-items self-center w-238 h-27.5 mt-4 gap-2 py-6 rounded-lg">
      <div className="gap-6">
      <h1 className="font-['Inter'] font-bold text-[30px] leading-10 tracking-[-0.3px] w-65.75 h-10 opacity-100 text-[#303030]">
        Welcome to Vidify
      </h1>
      <p className="font-['Inter'] font-[450] text-[12px] leading-4 w-131.75 h-4 opacity-100 text-[#616161]">
        Enhance your video creation with the power of AI
      </p>
      </div>
    </div>
  );
};

export default Welcome;