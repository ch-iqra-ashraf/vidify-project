import React from "react";
import { HomeIconSVG } from "./Icons/AlIcons";

const SideBarHeading = ({ name, Icon }) => {
  return (
  

        <div className="flex items-center w-54 h-7 gap-20 pt-1 pr-1 pb-1 pl-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <p className="text-xs text-gray-500 px-2 mb-1">{name}</p>
          <Icon />
        </div>
        
  );
};

export default SideBarHeading;
