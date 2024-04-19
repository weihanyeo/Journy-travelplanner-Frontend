"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("JWT token found in local storage");
      // Fetch the user data from the server or set a placeholder
      setUserData({
        /* placeholder user data */
      });
    } else {
      setUserData(null);
      console.log("JWT not found");
    }
  }, []);

  const handleProfileClick = () => {
    if (!userData) {
      router.push("/Signup");
    } else {
      router.push("/Profile");
    }
  };

  const handlePlanningClick = () => {
    if (!userData) {
      router.push("/Signup");
    } else {
      router.push("/Planning");
    }
  };

  const handleLogout = () => {
    // Remove the JWT token from local storage
    localStorage.removeItem("jwt");
    // Reset the user data state
    setUserData(null);
    // Redirect the user to the login page
    router.push("/Login");
  };

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
      <nav id="Home" className="navbar navbar-expand-lg navbar-light navbar">
        <div className="container">
          <a
            className="navbar-brand navwwwwwbarBrand"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="journy.png"
              width="30"
              height="30"
              className="d-inline-block"
            />
            Journy
          </a>
          <button
            className="navbar-toggler justify-content-end "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <button
                className="nav-link"
                onClick={() => router.push("/LandingPage")}
              >
                Home
              </button>
              <button
                className="nav-link"
                onClick={() => router.push("/Discover")}
              >
                Discover
              </button>
              {userData && (
                <>
                  <button className="nav-link" onClick={handlePlanningClick}>
                    Planning
                  </button>
                  <button
                    className="nav-link"
                    type="button"
                    onClick={handleProfileClick}
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
              {!userData && (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => router.push("/Login")}
                >
                  Let's Explore!
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
