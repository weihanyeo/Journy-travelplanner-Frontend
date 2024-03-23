"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  const onSignUp = () => {};
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
      <br />
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
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
