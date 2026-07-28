import React from "react";
import { HomeIconSVG } from "./Icons/AlIcons";

const MenuItem = ({ name, Icon }) => {
  return (
    <div className="flex items-center w-54 h-7 gap-2 pt-1 pr-1 pb-1 pl-2 rounded-lg hover:bg-gray-100 cursor-pointer">
    {Icon && <Icon />}
      <span className="font-['Inter'] font-[550] text-[13px] leading-5 tracking-normal">
        {name}
      </span>
    </div>
  );
};

export default MenuItem;
