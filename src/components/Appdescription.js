import React from "react";
import "./Appdescription.css";

function Appdescription() {
  return (
    <div className="app-description-container">
      {/* First App Description */}
      <div className="map-logic-container">
        <div className="image-container">
          <img
            className="image-mocks"
            src="images/fayble-map-mockup.png"
            alt="phone"
          />
        </div>
        <div className="text-container">
          <h1 className="headers">Always</h1>
          <h2 className="headers">Know</h2>
          <h3 className="headers">What's</h3>
          <h4 className="headers">Going</h4>
          <h5 className="headers">On</h5>
          <p>
            Plan, attend, explore, and share your favorite events with your
            entire community (or just your friends)!
          </p>
        </div>
      </div>
      
      {/* Second App Description */}
      <div className="map-logic-container reversed">
        <div className="image-container">
          <img
            className="image-mocks"
            src="images/fayble-rsvp-mockup.png"
            alt="phone"
          />
        </div>
        <div className="text-container-reversed">
          <h1 className="headers">RSVP</h1>
          <h2 className="headers">to</h2>
          <h3 className="headers">Events</h3>
          <p>
            Quickly RSVP to events and stay informed about your upcoming plans!
          </p>
        </div>
      </div>

            {/* Third App Description */}
            <div className="map-logic-container">
        <div className="image-container">
          <img
            className="image-mocks"
            src="images/fayble-notifications-mockup.png"
            alt="phone"
          />
        </div>
        <div className="text-container-notifs">
          <h1 className="headers">Stay</h1>
          <h2 className="headers">In</h2>
          <h3 className="headers">The</h3>
          <h4 className="headers">Loop</h4>
          <p>
            Get notified about upcoming events, posts, rsvps, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Appdescription;
