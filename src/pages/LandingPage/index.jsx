"use client";

import React from "react";

const index = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row-reverse">
        <button type="button" className="btn btn-primary btn-sm">
          Small button
        </button>
        <button type="button" className="btn btn-info">
          info
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
      </div>

      <div className="mr-6 col-10 p mt-5 container row h-00">
        <div className="col">
          <h1>
            Embark on Your Journey of Discovery with <b>Journy</b>
          </h1>
          <br />
          <h4> Where Adventure Meets Collaboration: </h4>{" "}
          <h4>Explore, Share, Create – Your Ultimate Travel Companion</h4>
        </div>
      </div>
      <br />
      <div className="container h-12">
        <h4>
          {" "}
          Welcome to Journy, where the world is your playground and every trip
          is an opportunity for unforgettable memories. Immerse yourself in a
          community-driven travel experience that goes beyond the ordinary.{" "}
        </h4>{" "}
        <h4>
          Welcome to Journy, where the world is your playground and every trip
          is an opportunity for unforgettable memories. Immerse yourself in a
          community-driven travel experience that goes beyond the ordinary.
          Unleash the power of collaboration with our unique social feature,
          allowing you to effortlessly share, remix, and personalize itineraries
          created by fellow globetrotters. Fuel your wanderlust, inspire others,
          and let the journey of a thousand possibilities begin
        </h4>
      </div>
    </div>
  );
};

export default index;
