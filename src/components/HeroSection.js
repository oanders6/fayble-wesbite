import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <img
            className="image-mocks"
            src="images/fayble-logo.png"
            alt="phone"
          />
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize={"btn--large"}>Download</Button>
      </div>
    </div>
  );
}

export default HeroSection;
