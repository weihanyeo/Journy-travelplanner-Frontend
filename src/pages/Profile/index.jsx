import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClipboardList, faUserGroup, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import UploadImage from "../../components/UploadImage";
import styles from './index.module.css';
import axiosClient from '../../others/network/axiosClient';

const Index = () => {
  const [userData, setUserData] = useState({
    name: "Enrico Lim",
    contact: "91234567",
    email: "EnricoLim@gmail.com",
    location: "Singapore",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. asfjsdhgjsdghjhdsGDHBhjsgb sajghdSKJGHSjkdhgjsdghjs JAKDGHksdgjsebgjhsabGJKbdjkfbgajkshb",
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

  const handleUploadSuccess = (imageUrl) => {
    setTempUserData(prevData => ({ ...prevData, imageUrl }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    let newErrors = {};
    let hasErrors = false;

    if (!/^\d+$/.test(tempUserData.contact)) {
      newErrors.contact = 'Contact must contain only numbers.';
      hasErrors = true;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(tempUserData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasErrors = true;
    }

    if (!tempUserData.location.trim()) {
      newErrors.location = 'Location cannot be empty.';
      hasErrors = true;
    }

    if (!tempUserData.name.trim()) {
      newErrors.name = 'Name cannot be empty.';
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
              className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
              placeholder="Enter name"
            />
            {errors.name && (
              <div className="alert alert-danger mt-2" role="alert">{errors.name}</div>
            )}
          </div>
        ) : (
          <h1>{userData.name}</h1>
        )}
        <br/>
        <p>
          <strong>Contact: </strong>
          {editMode ? (
            <div>
              <input 
                type="text" 
                value={tempUserData.contact} 
                onChange={handleInputChange} 
                name="contact" 
                className={`form-control ${errors.contact ? 'is-invalid' : ''}`} 
                placeholder="Enter contact"
              />
              {errors.contact && (
                <div className="alert alert-danger mt-2" role="alert">{errors.contact}</div> 
              )}
            </div>
          ) : userData.contact}
        </p>
        <p>
          <strong>Email address: </strong>
          {editMode ? (
            <div>
              <input 
                type="email" 
                value={tempUserData.email} 
                onChange={handleInputChange} 
                name="email" 
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter email"
              />
              {errors.email && (
                <div className="alert alert-danger mt-2" role="alert">{errors.email}</div>
              )}
            </div>
          ) : userData.email}
        </p>
        <p>
          <strong>Location: </strong>
          {editMode ? (
            <div>
              <input 
                type="text" 
                value={tempUserData.location} 
                onChange={handleInputChange} 
                name="location" 
                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                placeholder="Enter Location"
              />
              {errors.location && (
                <div className="alert alert-danger mt-2" role="alert">{errors.location}</div> 
              )}
            </div>
          ) : userData.location}
        </p>

          <h3>About Me:</h3>
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
          
          {editMode ? (
            <div className={styles.buttonGroup}>
              <button onClick={handleSaveChanges} className={`${styles.button} ${styles.buttonPrimary}`} type="button">Save Changes</button>
              <button onClick={handleCancel} className={`${styles.button} ${styles.buttonSecondary}`} type="button">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setEditMode(true)} className={`${styles.button} ${styles.buttonPrimary} mt-3`}>Edit Profile</button>
          )}

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

        <div className="col-md-6 d-flex flex-column align-items-center">
          {tempUserData.imageUrl && (
            <img
              src={tempUserData.imageUrl}
              alt="Profile"
              className={styles.profileImage}
            />
          )}
          {editMode && (
            <UploadImage onUploadSuccess={handleUploadSuccess} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
