import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
//import "./index.scss";

const NavBar = () => {
  //to be used with footer
  // const handleScrollTo = (id: string): void => {
  //   const targetElement = document.getElementById(id);

  //   if (targetElement) {
  //     window.scrollTo({
  //       top: targetElement.offsetTop - 70, // Adjust the offset as needed
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const router = useRouter();

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.2,
        delay: 0.8,
      }}
    >
      <nav id="Home" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" rel="noreferrer">
            <img
              src="journy.png"
              //alt="Logo"
              width="30"
              height="30"
              className="d-inline-block"
            />
            Journy
          </a>
          <button
            className="navbar-toggler justify-content-end "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <button className="nav-link" onClick={() => router.push("/Home")}>
                Home
              </button>
              <button
                className="nav-link"
                onClick={() => router.push("/Discover")}
              >
                Discover
              </button>
              <button
                className="nav-link "
                onClick={() => router.push("/Planning")}
              >
                Planning
              </button>

              <button
                className="nav-link "
                type="button"
                onClick={() => router.push("/Profile")}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
