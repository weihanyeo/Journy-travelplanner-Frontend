"use client";

import React from "react";

const index = () => {
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
      <label for="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
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
      >
        Sign up
      </button>
    </div>
  );
};

export default index;
