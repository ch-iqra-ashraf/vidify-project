import React from "react";
import { HomeIconSVG } from "./Icons/AlIcons";

const Button = ({ name, Icon }) => {
  return (
   
        <button className="text-sm w-36 flex flex-row font-medium text-gray-800 border gap-1.5 whitespace-nowrap px-3 py-1.5 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
         {Icon && <Icon />}
      <span>{name}</span>
        </button>
  );
};
                        
export default Button;   
