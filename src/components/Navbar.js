import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [button, setButton] = useState(true);
  const handleClick = () => {
    console.log("clicked");
  };

  // note: don't have any of the rescaling stuff for the button

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            fayble
            {/* <img src="images/fayble-logo.png" alt="fayble logo" /> */}
          </Link>
          {button && <Button buttonStyle="btn--outline">Download</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
