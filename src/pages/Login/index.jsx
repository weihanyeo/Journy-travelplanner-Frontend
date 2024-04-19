"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import axiosClient from "../../others/network/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jwtDecode } from "jwt-decode";

const Index = () => {
  const router = useRouter();
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });
  const [errorMsgs, setErrorMsgs] = useState("");
  const [userData, setUserData] = useState(null); // Add this line to define the user data state

  const onChangeField = (field) => (e) => {
    setFormDetails({
      ...formDetails,
      [field]: e.target.value,
    });
  };

  const validateFields = () => {
    let hasError = false;
    const { username, password } = formDetails;
    let newErrorMsg = "";
    if (username.length < 1) {
      hasError = true;
      newErrorMsg = newErrorMsg + "Username is missing. ";
    }

    if (password.length < 1) {
      hasError = true;
      newErrorMsg = newErrorMsg + "Password is missing. ";
    }
    setErrorMsgs(newErrorMsg);
    console.log("data validated");
    return hasError;
  };

  const onLogin = async () => {
    const hasError = validateFields();
    if (!hasError) {
      try {
        console.log("Attempting to log in...");
        const response = await axiosClient.post(
          "/members/authenticate",
          formDetails
        );
        console.log("Login successful!");

        // store current member username
        const { token, user } = response.data;
        console.log("Received token and user data from server");
        const decoded = jwtDecode(token);
        console.log("decoded:", decoded);

        // Store the JWT token in the local storage or cookies
        localStorage.setItem("currentUser", decoded.sub);
        localStorage.setItem("jwt", token);
        console.log("Stored JWT token in local storage");

        // Store the user data in the application state or context
        setUserData(user); // Update this line
        console.log("Stored user data in application state/context");

        setTimeout(() => {
          window.location.reload();
        }, 500);

        // Redirect the user to the desired page
        router.replace("/Discover");
        console.log("Redirected user to Discover page");
      } catch (error) {
        console.error("Error occurred during login:", error);
        if (error.response) {
          // Handle specific error responses from the server
          setErrorMsgs(error.response.data.message);
          console.error("Error message set:", error.response.data.message);
        } else {
          // Handle network or other errors
          setErrorMsgs("An error occurred. Please try again later.");
          console.error("Generic error message set");
        }
      }
    }
  };

  return (
    <div
      className="container mt-3 justify-content-center"
      style={{ minHeight: "40rem", maxWidth: "40rem" }}
    >
      <img
        src="loginpage.png"
        //alt="Logo"
        width="600"
        height="600"
        className="align-middle rounded-3"
      />
      <br />
      <h1 className="text-center"> Welcome back to Journy</h1>
      <h5 className="text-center" style={{ fontWeight: "50" }}>
        Where enchanted journeys begin. Log in or sign up to continue
      </h5>
      {errorMsgs.length > 0 && (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <div>
            Holy guacamole!
            <strong> {errorMsgs.substring(0, errorMsgs.length - 2)}</strong>
          </div>
        </div>
      )}
      <br />
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Username"
          value={formDetails.username}
          onChange={onChangeField("username")}
        />
      </div>
      <label for="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
        value={formDetails.password}
        onChange={onChangeField("password")}
      />
      <div id="passwordHelpBlock m" className="form-text">
        Your password <b>must be</b> 8-20 characters long, contain letters and
        numbers, and <b>must not contain</b> spaces, special characters, or
        emoji.
      </div>
      <br />
      <button
        type="button"
        className="btn btn-primary rounded-4"
        style={{
          width: "100%",
          fontSize: "0.9rem",
        }}
        onClick={onLogin}
      >
        Log in
      </button>

      <h6 className="text-center mt-4" style={{ fontWeight: "40" }}>
        Don't have an account?
      </h6>
      <button
        type="button"
        className="mt-2"
        style={{
          width: "100%",
          fontSize: "0.9rem",
        }}
        onClick={() => router.push("/Signup")}
      >
        Sign up
      </button>
    </div>
  );
};

export default Index;
