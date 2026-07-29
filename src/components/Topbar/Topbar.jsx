import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex gap-3 h-9 px-6">
      <Link to="/" className="flex items-center w-full max-w-4xl rounded-lg h-9.5">
        <img src="/images/vidify logo.svg" alt="V Logo" />
        <span className="text-lg font-semibold text-[#1A1A3C]">Vidify</span>
      </Link>
    </div>
  );
};

export default Topbar;

