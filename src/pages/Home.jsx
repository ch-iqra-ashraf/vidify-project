import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";
import VideoAI from "../components/CallExpert/Videoai";
import Welcome from "../components/Welcome/Welcome";
import Sidebar from "../components/SideBar/Sidebar";
import VideoGenerator from "../components/GenerateVideo/Videogenerator";
import DriveSales from "../components/Drive Sales/DriveSales";
import VidifyExpert from "../components/CallExpert/VidifyExpert";
import OtherApps from "../components/OtherApps/OtherApps";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 bg-gray-200">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <Welcome />
          <VideoGenerator />
          <VideoAI />
          <DriveSales />
          <VidifyExpert />
          <OtherApps />
        </div>
      </div>
    </div>
  );
};

export default Home;
