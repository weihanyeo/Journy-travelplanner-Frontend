"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import axiosClient from "../../others/network/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {
  const router = useRouter();
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });
  const [errorMsgs, setErrorMsgs] = useState("");
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
      //all fields are ok, we send data to BE
      //redirect to another page
      try {
        await axiosClient.post(
          "/customers/login",
          //request body below
          formDetails
        );
        router.push("/Discover");
      } catch (error) {
        setErrorMsgs("Account not found! Try signing up.  ");
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
          fontSize: "0.9rem;",
        }}
        onClick={onLogin}
      >
        Log in
      </button>
      <h6 className="text-center mt-2" style={{ fontWeight: "50" }}>
        or
      </h6>
      <button
        type="button"
        className="btn btn-primary rounded-4 mt-2"
        style={{
          width: "100%",
          fontSize: "0.9rem;",
        }}
      >
        Continue with Google
      </button>

      <h6 className="text-center mt-4" style={{ fontWeight: "40" }}>
        Don't have an account?
      </h6>
      <button
        type="button"
        className="mt-2"
        style={{
          width: "100%",
          fontSize: "0.9rem;",
        }}
        onClick={() => router.push("/Signup")}
      >
        Sign up
      </button>
    </div>
  );
};

export default Index;
