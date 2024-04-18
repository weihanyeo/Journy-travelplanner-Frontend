"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Timetable from "../../components/Timetable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [nearbyPlaces, setNearbyPlaces] = useState(new Array(4).fill(0));
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
        router.push("/Signup");
      }
    }
  }, [router]);

  const loadMoreAdventures = () => {
    setNearbyPlaces((prevPlaces) => [...prevPlaces, ...new Array(4).fill(0)]);
  };

  const timetableData = [
    {
      date: "12th Sept 2023",
      activities: [
        { time: "9:30am", name: "Activity Name" },
        { time: "11:30am", name: "Activity Name" },
      ],
    },
  ];

  return (
    <div className="container my-5">
      {/*Timetable*/}
      <div className="row">
        <div className="col-md-6">
          <h2>Your Timetable</h2>
          <Timetable data={timetableData} />
        </div>
        <div className="col-md-6">
          <div
            className="map-placeholder"
            style={{ height: "200px", backgroundColor: "#ddd" }}
          />
        </div>
      </div>

      {/*Nearby places*/}
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <h2>Nearby Places</h2>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Place/Activities"
              aria-label="Search"
            />
          </div>
        </div>
      </div>

      {/*Cards*/}
      <div className="row mt-3">
        {nearbyPlaces.map((_, index) => (
          <div
            className="col-6 col-md-3 mb-4"
            key={index}
            style={{ padding: "0 8px" }}
          >
            <Card />
          </div>
        ))}
      </div>

      {/*Load more*/}
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-primary" onClick={loadMoreAdventures}>
            Load more adventures!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
