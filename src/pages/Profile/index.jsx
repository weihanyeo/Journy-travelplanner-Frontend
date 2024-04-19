"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClipboardList,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import UploadImage from "../../components/UploadImage";
import Post from "../../components/Post";
import styles from "./index.module.css";
import axiosClient from "../../others/network/axiosClient";

const Index = () => {
  const [userData, setUserData] = useState(null);
  const [tempUserData, setTempUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("myPosts");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const [totalPages, setTotalPages] = useState(0);

  const currentPosts = posts.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (userData && (userData.posts || userData.likedPosts)) {
      const newPosts =
        activeTab === "myPosts" ? userData.posts : userData.likedPosts;
      setPosts(newPosts);
      setTotalPages(Math.ceil(newPosts.length / cardsPerPage));
      setCurrentPage(1);
    }
  }, [userData, activeTab]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    try {
      console.log("fetching....");
      const response = await axiosClient.get("/members/my-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log(response.data ? response.data : "No response");
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
    const dataToSend = {
      ...updatedData,
      authorities: undefined,
    };
    try {
      const token = localStorage.getItem("jwt");
      if (token) {
        console.log("JWT token exists:", token);
      } else {
        console.log("JWT token not found in localStorage");
      }
      const response = await axiosClient.put(
        "/members/update-profile",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      setUserData(response.data);
      console.log("Success");
      return response.data;
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleSaveChanges = async () => {
    let newErrors = {};
    let hasErrors = false;

    if (!/^\S+@\S+\.\S+$/.test(tempUserData.email)) {
      newErrors.email = "Please enter a valid email address.";
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
            userData && <h1>{userData.name}</h1>
          )}
          <p className={styles.usernameText}>
            {userData && <strong>@{userData.username}</strong>}
          </p>
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
              userData && <p>{userData.email}</p>
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
            userData && <p>{userData.aboutMe}</p>
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
            {userData && (
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
                  <p>{userData.likesReceived ? userData.likesReceived : 0}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          {userData && (
            <img
              src={userData.profilePictureURL || "/defaultImg.png"}
              alt="Profile"
              className={styles.profileImage}
            />
          )}
          {editMode && <UploadImage onUploadSuccess={handleUploadSuccess} />}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.toggleButton} ${
            activeTab === "myPosts" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("myPosts")}
        >
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faClipboardList} size="lg" />
          </div>
          My Posts
        </button>
        <button
          className={`${styles.toggleButton} ${
            activeTab === "likedPosts" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("likedPosts")}
        >
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </div>
          Liked Posts
        </button>
      </div>
      {activeTab === "myPosts" && (
        <>
          <div className="row">
            {currentPosts.map((post, index) => (
              <div key={index} className="col-12 mb-4">
                <Post post={post} />
              </div>
            ))}
          </div>

          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <li
                    key={number}
                    className={`page-item ${
                      currentPage === number ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>

          {currentPage < totalPages && (
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                View More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
