import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import VideoAI from "../components/Videoai";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import VideoGenerator from "../components/Videogenerator";
import DriveSales from "../components/DriveSales";
import VidifyExpert from "../components/VidifyExpert";
import OtherApps from "../components/OtherApps";


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
