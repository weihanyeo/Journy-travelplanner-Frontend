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
import axiosClient from "../../others/network/axiosClient";

const Index = () => {
  const [userData, setUserData] = useState(null);
  const [tempUserData, setTempUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (isUserLoggedIn) {
      fetchUserData();
    }
  }, [isUserLoggedIn]);

  const fetchUserData = async () => {
    try {
      const response = await axiosClient.get("/api/members/my-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUserData(response.data);
      setTempUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleUploadSuccess = (imageUrl) => {
    setTempUserData((prevData) => ({
      ...prevData,
      profilePictureURL: imageUrl,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateProfile = async (updatedData) => {
    try {
      const response = await axiosClient.put(
        "/api/members/update-profile",
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleSaveChanges = async () => {
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
      try {
        await updateProfile(tempUserData);
        setUserData({ ...tempUserData });
        setEditMode(false);
        setErrors({});
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleCancel = () => {
    setTempUserData({ ...userData });
    setEditMode(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          {editMode ? (
            <div>
              <strong>Name:</strong>
              <input
                type="text"
                id="name"
                value={tempUserData.name}
                onChange={handleInputChange}
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter name"
              />
              {errors.name && (
                <div className="alert alert-danger mt-2" role="alert">
                  {errors.name}
                </div>
              )}
            </div>
          ) : (
            <h1>{userData.name}</h1>
          )}
          <br />
          <p>
            <strong>Email address: </strong>
            {editMode ? (
              <div>
                <input
                  type="email"
                  value={tempUserData.email}
                  onChange={handleInputChange}
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter email"
                />
                {errors.email && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>
            ) : (
              userData.email
            )}
          </p>
          <h3>About Me:</h3>
          {editMode ? (
            <textarea
              className={styles.textAreaField}
              value={tempUserData.aboutMe}
              onChange={handleInputChange}
              name="aboutMe"
            />
          ) : (
            <p>{userData.aboutMe}</p>
          )}

          {editMode ? (
            <div className={styles.buttonGroup}>
              <button
                onClick={handleSaveChanges}
                className={`${styles.button} ${styles.buttonPrimary}`}
                type="button"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className={`${styles.button} ${styles.buttonSecondary}`}
                type="button"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className={`${styles.button} ${styles.buttonPrimary} mt-3`}
            >
              Edit Profile
            </button>
          )}

          <div className="mt-4">
            <div className="row text-center">
              <div className="col">
                <FontAwesomeIcon icon={faUserGroup} />
                <h4 className="mt-2">Followers</h4>
                <p>
                  {userData.followersMembers
                    ? userData.followersMembers.length
                    : 0}
                </p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faUserPlus} />
                <h4 className="mt-2">Following</h4>
                <p>
                  {userData.followingMembers
                    ? userData.followingMembers.length
                    : 0}
                </p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faClipboardList} />
                <h4 className="mt-2">Itineraries</h4>
                <p>{userData.posts ? userData.posts.length : 0}</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faHeart} />
                <h4 className="mt-2">Likes Received</h4>
                <p>{userData.likesReceived}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center">
            <img
              src={userData.profilePictureUrl || "/defaultImg.png"}
              alt="Profile"
              className={styles.profileImage}
            />
            {editMode && <UploadImage onUploadSuccess={handleUploadSuccess} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
