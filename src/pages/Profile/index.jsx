import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClipboardList,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4">Enrico Lim</h1>
          <p className="mb-2">
            <strong>Contact:</strong> 91234567
          </p>
          <p className="mb-2">
            <strong>Email address:</strong> EnricoLim@gmail.com
          </p>
          <p className="mb-4">
            <strong>Location:</strong> Singapore
          </p>
          <h3 className="mb-3">About Me:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="mt-4">
            <div className="row text-center">
              <div className="col">
                <FontAwesomeIcon icon={faUserGroup} size="lg" />
                <h4 className="mt-2">Followers</h4>
                <p>123</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faUserPlus} size="lg" />
                <h4 className="mt-2">Following</h4>
                <p>456</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faClipboardList} size="lg" />
                <h4 className="mt-2">Itineraries</h4>
                <p>12</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faHeart} size="lg" />
                <h4 className="mt-2">Total Likes</h4>
                <p>789</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div style={{ maxWidth: "400px" }}>
            <Image
              src="/profileimg.jpg"
              alt="Profile Picture"
              width={300}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
