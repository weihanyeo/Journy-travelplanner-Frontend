import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <motion.div
      className="nav-header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.2,
        delay: 0.8,
      }}
    >
      <nav className={`navbar navbar-expand-lg navbar-light navbar`}>
        <div className="container">
          <a className={`navbar-brand navbarBrand`} href="#">
            <img
              src="journy.png"
              alt="Journy Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Journy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ms-auto navbarNav`}>
              <li className="nav-item">
                <button
                  className={`nav-link navLink`}
                  onClick={() => router.push("/LandingPage")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link navLink`}
                  onClick={() => router.push("/Discover")}
                >
                  Discover
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link navLink`}
                  onClick={() => router.push("/Planning")}
                >
                  Planning
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link navLink`}
                  onClick={() => router.push("/Profile")}
                >
                  Profile
                </button>
              </li>
            </ul>
            <button
              className={`btn btn-outline-warning exploreBtn`}
              onClick={() => router.push("/Login")}
            >
              Let's Explore!
            </button>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
