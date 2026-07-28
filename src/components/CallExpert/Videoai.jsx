import React from "react";
import FeatureCard from "./FeatureCard";
import { AIVideoIconSVG } from "../Icons/AlIcons";

const VideoAI = () => {
  return (
    <FeatureCard
      image={{ src: "images/Frame.jpg", alt: "AI video generator" }}
      heading="Generate Stunning AI-Videos from Product Images"
      description="Turn your product images into scroll-stopping marketing videos in seconds."
      buttonName="Generate AI Video"
      buttonIcon={AIVideoIconSVG}
    />
  );
};

export default VideoAI;
