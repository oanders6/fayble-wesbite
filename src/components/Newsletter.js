import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <section className="newsletter-subscription">
        <h1 className="newsletter-subscription-heading">
          Join the newsletter to stay in the loop
        </h1>
        {/* <p className="newsletter-subscription-text">
          You can unsubscribe at any time.
        </p> */}
        <div className="input-areas">
          <form>
            <input
              className="newsletter-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button className="subscription-button" buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
