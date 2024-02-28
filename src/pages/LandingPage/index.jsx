"use client";

import { motion } from "framer-motion";
import React from "react";

const index = () => {
  return (
    <div className="container mt-5">
      <br />
      <br />
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, x: -180 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 1.2,
          delay: 0.5,
        }}
      >
        <div className="landing-container mt-5 row justify-content-center ">
          <div className="text-container col-4 g-col-6 ">
            <h1>
              Embark on Your Journey of Discovery with <b>Journy</b>
            </h1>
            <br />
            <h4> Where Adventure Meets Collaboration: </h4>{" "}
            <h4>Explore, Share, Create - Your Ultimate Travel Companion</h4>
            <br />
          </div>
          <br />
          <motion.div
            className="text-container col-4 g-col-6 rounded-5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1.2,
              delay: 0.8,
            }}
          >
            <img src="landingPage1.jpg" className="image-container " />
          </motion.div>
        </div>
      </motion.div>

      <h5 className="container spacer text-center text-align-center">
        Experience the extraordinary with Journy. Collaborate, share, and
        personalize itineraries with our innovative social feature. Join a
        community of adventurers, fuel your wanderlust, and embark on
        unforgettable journeys. Let every trip be a canvas for inspiring
        memories.
      </h5>
    </div>
  );
};

export default index;
