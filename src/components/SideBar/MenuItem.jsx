import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowIconSVG } from "../Icons/AlIcons";


const MenuItem = ({ name, Icon, to, isSubItem = false, showArrowWhenActive = false }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center w-54 h-7 gap-2 pt-1 pr-1 pb-1 pl-2 rounded-lg hover:bg-gray-100 cursor-pointer ${
          isActive ? "bg-gray-100" : ""
        }`
      }
    >
      {({ isActive }) => (
        <>
          {showArrowWhenActive && isActive && (
            <ArrowIconSVG className="w-3 h-3 text-gray-400" />
          )}
          {Icon && <Icon />}
          <span
            className={`font-['Inter'] text-[13px] leading-5 tracking-normal ${
              isSubItem
                ? isActive
                  ? "font-[550] text-[#1A1A3C]"
                  : "font-normal text-gray-400"
                : "font-[550] text-[#1A1A3C]"
            }`}
          >
            {name}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default MenuItem;
