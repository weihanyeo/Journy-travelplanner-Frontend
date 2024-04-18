"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import axiosClient from "../../others/network/axiosClient";

const Index = () => {
  const router = useRouter();
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
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
    const { username, password, name, email } = formDetails;
    let newErrorMsg = "";
    if (username.length < 1) {
      hasError = true;
      newErrorMsg = newErrorMsg + "Username, ";
    }

    if (name.length < 1) {
      hasError = true;
      newErrorMsg = newErrorMsg + "Name, ";
    }

    if (email.length < 1 || !email.includes("@")) {
      hasError = true;
      newErrorMsg = newErrorMsg + "Email, ";
    }

    const pattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if (
      password.length < 8 ||
      password.length > 20 ||
      !pattern.test(password)
    ) {
      hasError = true;
      newErrorMsg = newErrorMsg + "Password, ";
    }
    setErrorMsgs(newErrorMsg);
    console.log("data validated");
    return hasError;
  };

  const onSignUp = async () => {
    const hasError = validateFields();
    if (!hasError) {
      //all fields are ok, we send data to BE
      //redirect to another page
      try {
        await axiosClient.post(
          "/members/register",
          //request body below
          formDetails
        );
        router.push("/Discover");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div
      className="container mt-3 justify-content-center"
      style={{ minHeight: "40rem", maxWidth: "40rem" }}
    >
      <img
        src="signupPage.png"
        //alt="Logo"
        width="600"
        height="600"
        className="align-middle rounded-3"
      />
      <br />
      <h1 className="text-center">Register for a magical journey</h1>
      {errorMsgs.length > 0 && (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <div>
            Holy guacamole! You should check on these fields:
            <strong> {errorMsgs.substring(0, errorMsgs.length - 2)}</strong>
          </div>
        </div>
      )}
      <br />
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Your Name"
          value={formDetails.name}
          onChange={onChangeField("name")}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={formDetails.email}
          onChange={onChangeField("email")}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Create a Username"
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
        placeholder="Create a Password"
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
        onClick={onSignUp}
      >
        Join us
      </button>
      <h6 className="text-center mt-4" style={{ fontWeight: "40" }}>
        Already with journy?
      </h6>
      <button
        type="button"
        className="mt-2"
        style={{
          width: "100%",
          fontSize: "0.9rem;",
        }}
        onClick={() => router.push("/Login")}
      >
        Log in
      </button>
    </div>
  );
};

export default Index;
