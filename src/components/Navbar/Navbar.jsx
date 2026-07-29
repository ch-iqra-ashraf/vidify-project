import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NotificationIconSVG, SearchIconSVG, ShopifyIconSVG } from "d:/Web development/Js/React JS/vidify_react/src/components/Icons/AlIcons";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1A1A] text-[#E3E3E3] h-14 flex items-center justify-between px-2 sm:px-4 font-sans select-none gap-2 sm:gap-4">
      {/*Shopify Logo */}
      <Link to="/" aria-label="Home">
      <ShopifyIconSVG />
      </Link>

      {/*  Search Bar */}
      <div className="flex-1 max-w-lg mx-1 sm:mx-4 relative hidden md:block">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-[#8C8C8C] text-xs"></i>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#303030] text-sm text-[#E3E3E3] placeholder-[#8C8C8C] pl-9 pr-3 py-1.5 rounded-lg border border-[#4A4A4A] focus:outline-none focus:border-[#616161] transition-colors h-8"
        />
      </div>

      {/* icons */}
      <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
        {/* Globe/Store icon button */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-1.5 hover:bg-[#303030] rounded-lg transition-colors text-[#cccccc] hidden sm:inline-flex ${
              isActive ? "bg-[#303030]" : ""
            }`
          }
        >
          <SearchIconSVG />

          {/* <i className="fa-solid fa-globe text-base"></i> */}
        </NavLink>

        {/* Notification Bell */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-1.5 hover:bg-[#303030] rounded-lg transition-colors text-[#cccccc] ${
              isActive ? "bg-[#303030]" : ""
            }`
          }
        >
          <NotificationIconSVG />
        </NavLink>

        {/*  Store Name */}
        <Link
          to="/"
          className="flex items-center bg-[#303030] hover:bg-[#3a3a3a] transition-colors pl-1 sm:pl-3 pr-1 py-1 rounded-lg cursor-pointer h-8 space-x-0 sm:space-x-2 border border-[#4A4A4A]"
        >
          <span className="text-xs font-medium text-[#E3E3E3] hidden md:inline">
            Stellar Interiors
          </span>
          <div className="h-6 w-6 rounded-md bg-[#FFFFFF] flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
            🪑
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
