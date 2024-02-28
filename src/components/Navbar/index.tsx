import { motion } from "framer-motion";
import React from "react";
//import "./index.scss";

const index: React.FC = () => {
  const handleScrollTo = (id: string): void => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

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
              src={process.env.PUBLIC_URL + `journy.png`}
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
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link me-3 " href="#">
                Pricing
              </a>
              <div className="justify-content-right">
                <button
                  className="btn btn-outline-success me-3 justify-content-end"
                  type="button"
                >
                  Let's Explore!
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default index;
