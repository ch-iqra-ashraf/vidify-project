import React from "react";


const SideBarHeading = ({ name, Icon, isOpen = true, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center justify-between w-54 h-7 pt-1 pr-1 pb-1 pl-2 rounded-lg hover:bg-gray-100 cursor-pointer"
    >
      <p className="text-xs text-gray-500 px-2 mb-1">{name}</p>
      <Icon className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? "rotate-90" : ""}`} />
    </button>
  );
};

export default SideBarHeading;
