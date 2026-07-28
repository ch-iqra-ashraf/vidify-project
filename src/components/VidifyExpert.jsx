import React from "react";
import FeatureCard from "./FeatureCard";
import { AIVideoIconSVG, CallIconSVG } from "./Icons/AlIcons";

const VideoAI = () => {
  return (
    <FeatureCard
      image={{ src: "images/Frame 60545.jpg", alt: "AI video generator" }}
      heading="Want to schedule a call?"
      description="We have marketing experts ready to help build your video marketing strategy and guide you in scaling your store with video. Want to book a one-to-one session? It’s FREE!"
      buttonName="Talk to Vidify Expert"
      buttonIcon={CallIconSVG}
    />
  );
};

export default VideoAI;
