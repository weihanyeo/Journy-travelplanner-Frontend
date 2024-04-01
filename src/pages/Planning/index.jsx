import React, { useState } from "react";
import Card from "../../components/Card";
import Timetable from "../../components/Timetable";
import { getServerSession } from "next-auth/next";
import authOptions from "../../api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Index = async () => {
  const [nearbyPlaces, setNearbyPlaces] = useState(new Array(4).fill(0));

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

  const session = await getServerSession(authOptions);
  if (session == null) {
    return redirect("/Signup");
  } else {
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
  }
};

export default Index;
