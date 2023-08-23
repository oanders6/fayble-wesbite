import React from "react";
import "./Appdescription.css";

function Appdescription() {
  return (
    <div className="description-container">
      <div class="image-container">
        <img class="image-mocks" src="images/fayble-map-mockup.png" alt="phone" />
      </div>
      <div className="text-container">
        <h1 class="headers">Always</h1>
        <h2 class="headers">Know</h2>
        <h3 class="headers">What's</h3>
        <h4 class="headers">Going</h4>
        <h5 class="headers">On</h5>
        <p>
          Plan, atttend, explore, and share your favrotie events with your
          entire community (or just your friends)!
        </p>
      </div>
      {/* <div class="image-container">
        <img class="image-mocks" src="images/fayble-map-mockup.png" alt="phone" />
      </div>
      <div className="text-container">
        <h1 class="headers">Always</h1>
        <h2 class="headers">Know</h2>
        <h3 class="headers">What's</h3>
        <h4 class="headers">Going</h4>
        <h5 class="headers">On</h5>
        <p>
          Plan, atttend, explore, and share your favrotie events with your
          entire community (or just your friends)!
        </p>
      </div> */}
    </div>
  );
}

export default Appdescription;
