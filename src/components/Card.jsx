import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Title example",
    description: "Description example",
    imgUrl: "loginpage.png", //
    imgNewTab: "https://www.google.com/", // taget link
  },
];

const Card = () => {
  const openProjectInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <motion.div id="Project" className="project-head">
        <p className="sectionSubText">Featured Destinations</p>
      </motion.div>

      <div className="app-profiles">
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, type: "tween" }}
            className="app-profile-item"
            key={project.title + index}
            onClick={() => openProjectInNewTab(project.imgNewTab)}
            style={{ cursor: "pointer" }}
          >
            <img src={project.imgUrl} alt={project.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {project.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Card;
