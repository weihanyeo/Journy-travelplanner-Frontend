// ProfilePage.jsx

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClipboardList,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import UploadImage from "../../components/UploadImage";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const Index = () => {
  const [userData, setUserData] = useState({
    name: "Enrico Lim",
    contact: "91234567",
    email: "EnricoLim@gmail.com",
    location: "Singapore",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. asfjsdhgjsdghjhdsGDHBhjsgb sajghdSKJGHSjkdhgjsdghjs JAKDGHksdgjsebgjhsabGJKbdjkfbgajkshb",
    followers: 123,
    following: 456,
    itineraries: 12,
    totalLikes: 789,
    imageUrl: "",
  });
  const [tempUserData, setTempUserData] = useState({ ...userData });
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwt");
      if (token) {
        console.log("JWT token found in local storage");
        // Fetch the user data from the server or set a placeholder
        setUserData({
          /* placeholder user data */
          name: "Enrico Lim",
          contact: "91234567",
          email: "EnricoLim@gmail.com",
          location: "Singapore",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. asfjsdhgjsdghjhdsGDHBhjsgb sajghdSKJGHSjkdhgjsdghjs JAKDGHksdgjsebgjhsabGJKbdjkfbgajkshb",
          followers: 123,
          following: 456,
          itineraries: 12,
          totalLikes: 789,
          imageUrl: "",
        });
      } else {
        setUserData(null);
        console.log("JWT not found");
        router.push("/Signup");
      }
    }
  }, [router]);

  const handleUploadSuccess = (imageUrl) => {
    setTempUserData((prevData) => ({ ...prevData, imageUrl }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    let newErrors = {};
    let hasErrors = false;

    if (!/^\d+$/.test(tempUserData.contact)) {
      newErrors.contact = "Contact must contain only numbers.";
      hasErrors = true;
    }

    if (!/^\S+@\S+\.\S+$/.test(tempUserData.email)) {
      newErrors.email = "Please enter a valid email address.";
      hasErrors = true;
    }

    if (!tempUserData.location.trim()) {
      newErrors.location = "Location cannot be empty.";
      hasErrors = true;
    }

    if (!tempUserData.name.trim()) {
      newErrors.name = "Name cannot be empty.";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      setUserData({ ...tempUserData });
      setEditMode(false);
      setErrors({});
    }
  };

  const handleCancel = () => {
    setTempUserData({ ...userData });
    setEditMode(false);
  };

  const handleEditProfile = () => {
    if (isUserLoggedIn) {
    } else {
      alert("You are not authorized to edit this profile.");
    }
  };

  return (
    <div className={`container my-5 ${styles.bentoBox}`}>
      <div className={`row ${styles.bentoSection}`}>
        <div className={`col-md-6 ${styles.bentoTile}`}>
          <div className={styles.userInfoTile}>
            <h1>{editMode ? "Edit Profile" : userData.name}</h1>
            <div className={styles.userInfoField}>
              <div className={styles.userInfoLabel}>
                <strong>Contact:</strong>
              </div>
              <div className={styles.userInfoValue}>
                {editMode ? (
                  <input
                    type="text"
                    value={tempUserData.contact}
                    onChange={handleInputChange}
                    name="contact"
                    className={`form-control ${
                      errors.contact ? "is-invalid" : ""
                    }`}
                    placeholder="Enter contact"
                  />
                ) : (
                  userData.contact
                )}
                {errors.contact && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.contact}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.userInfoField}>
              <div className={styles.userInfoLabel}>
                <strong>Email address:</strong>
              </div>
              <div className={styles.userInfoValue}>
                {editMode ? (
                  <input
                    type="email"
                    value={tempUserData.email}
                    onChange={handleInputChange}
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter email"
                  />
                ) : (
                  userData.email
                )}
                {errors.email && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.userInfoField}>
              <div className={styles.userInfoLabel}>
                <strong>Location:</strong>
              </div>
              <div className={styles.userInfoValue}>
                {editMode ? (
                  <input
                    type="text"
                    value={tempUserData.location}
                    onChange={handleInputChange}
                    name="location"
                    className={`form-control ${
                      errors.location ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Location"
                  />
                ) : (
                  userData.location
                )}
                {errors.location && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.location}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.userInfoField}>
              <div className={styles.userInfoLabel}>
                <h3>About Me:</h3>
              </div>
              <div className={styles.userInfoValue}>
                {editMode ? (
                  <textarea
                    className={styles.textAreaField}
                    value={tempUserData.about}
                    onChange={handleInputChange}
                    name="about"
                  />
                ) : (
                  <p>{userData.about}</p>
                )}
              </div>
            </div>
          </div>

          {editMode ? (
            <div className={styles.buttonGroup}>
              <button
                onClick={handleSaveChanges}
                className={`btn btn-primary ${styles.primaryButton}`}
                type="button"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className={`btn btn-secondary ${styles.secondaryButton}`}
                type="button"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className={`btn btn-primary mt-3 ${styles.primaryButton}`}
            >
              Edit Profile
            </button>
          )}
        </div>

        <div
          className={`col-md-6 d-flex flex-column align-items-center ${styles.bentoTile}`}
        >
          {tempUserData.imageUrl && (
            <img
              src={tempUserData.imageUrl}
              alt="Profile"
              className={styles.profileImage}
            />
          )}
          {editMode && <UploadImage onUploadSuccess={handleUploadSuccess} />}

          <div className={`mt-4 ${styles.statsContainer}`}>
            <div className={`row text-center ${styles.statsRow}`}>
              <div className={`col ${styles.statsTile}`}>
                <FontAwesomeIcon icon={faUserGroup} />
                <h4 className="mt-2">Followers</h4>
                <p>{userData.followers}</p>
              </div>
              <div className={`col ${styles.statsTile}`}>
                <FontAwesomeIcon icon={faUserPlus} />
                <h4 className="mt-2">Following</h4>
                <p>{userData.following}</p>
              </div>
              <div className={`col ${styles.statsTile}`}>
                <FontAwesomeIcon icon={faClipboardList} />
                <h4 className="mt-2">Itineraries</h4>
                <p>{userData.itineraries}</p>
              </div>
              <div className={`col ${styles.statsTile}`}>
                <FontAwesomeIcon icon={faHeart} />
                <h4 className="mt-2">Total Likes</h4>
                <p>{userData.totalLikes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
