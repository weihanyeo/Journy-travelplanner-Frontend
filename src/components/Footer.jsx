import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid bg-dark text-white py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5>About Journy</h5>
            <p>
              Journy is your ultimate travel companion, offering personalized
              itineraries and connecting you with fellow adventurers.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/destinations">Destinations</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Main Street, City,
                Country
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> +123-456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                <a href="mailto:info@journy.com">info@journy.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 Journy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
