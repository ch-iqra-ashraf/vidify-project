import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Topbar from "./components/Topbar/Topbar";


const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 bg-gray-200">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Topbar />
             <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout