
import React from "react";
import VideoAI from "../components/CallExpert/Videoai";
import Welcome from "../components/Welcome/Welcome";
import VideoGenerator from "../components/GenerateVideo/Videogenerator";
import DriveSales from "../components/Drive Sales/DriveSales";
import VidifyExpert from "../components/CallExpert/VidifyExpert";
import OtherApps from "../components/OtherApps/OtherApps";

const Home = () => {
  return (
   
        <div className="flex flex-col flex-1">
          <Welcome />
          <VideoGenerator />
          <VideoAI />
          <DriveSales />
          <VidifyExpert />
          <OtherApps />
        </div>
      
  );
};

export default Home;
