import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Fayble newsletter to always know what's going on!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
          </div>
          <div class="footer-link-items">
          <Link to="/sign-up">Meet the team</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div> */}
      {/* <div className="footer-link-wrapper"> */}
      {/* <div class="footer-link-items"> */}
      {/* <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div> */}
      {/* <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              fayble
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">fayble © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              /*
               * "to" is where the link will go to
               */
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/fayble.inc/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
