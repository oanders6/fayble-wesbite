import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>MAKE LASTING MEMORIES</h1>
      <p>Join fayble</p>
      <div className="hero-btns">
        <Button className="btns btn--outline btn--large">GET STARTED</Button>
        <Button className="btns btn--primary btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
