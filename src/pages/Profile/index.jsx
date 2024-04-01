import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth/next";
import authOptions from "../../api/auth/[...nextauth]";
import { redirect } from "next/navigation";

import {
  faHeart,
  faClipboardList,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const userData = {
  name: "Enrico Lim",
  contact: "91234567",
  email: "EnricoLim@gmail.com",
  location: "Singapore",
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  followers: 123,
  following: 456,
  itineraries: 12,
  totalLikes: 789,
};

const Index = async () => {
/*   const session = await getServerSession(authOptions);
  console.log(session);
  if (session == null) {
    return redirect("/Signup");
  } else { */
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">{userData.name}</h1>
            <p className="mb-2">
              <strong>Contact:</strong> {userData.contact}
            </p>
            <p className="mb-2">
              <strong>Email address:</strong> {userData.email}
            </p>
            <p className="mb-4">
              <strong>Location:</strong> {userData.location}
            </p>
            <h3 className="mb-3">About Me:</h3>
            <p>{userData.about}</p>

            <div className="mt-4">
              <div className="row text-center">
                <div className="col">
                  <FontAwesomeIcon icon={faUserGroup} />
                  <h4 className="mt-2">Followers</h4>
                  <p>{userData.followers}</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faUserPlus} />
                  <h4 className="mt-2">Following</h4>
                  <p>{userData.following}</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faClipboardList} />
                  <h4 className="mt-2">Itineraries</h4>
                  <p>{userData.itineraries}</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faHeart} />
                  <h4 className="mt-2">Total Likes</h4>
                  <p>{userData.totalLikes}</p>
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
  }
};

export default Index;
