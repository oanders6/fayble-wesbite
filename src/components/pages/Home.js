import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import Appdescription from "../Appdescription";

function Home() {
  return (
    <>
      <HeroSection />
      <Appdescription />
      <Newsletter />
    </>
  );
}
export default Home;
