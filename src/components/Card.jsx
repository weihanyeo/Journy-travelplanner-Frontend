import React from "react";
import { motion } from "framer-motion";

const adventures = [
  {
    title: "Title example",
    description: "Description example",
    imgUrl: "loginpage.png", //
    imgNewTab: "https://www.google.com/", // taget link
  },
];

const Card = () => {
  const openAdventureInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <motion.div id="Adventure" className="adventure-head">
        <p className="sectionSubText">Featured Destinations</p>
        <h2 className="sectionHeadText">OUTDOORS</h2>
      </motion.div>

      <div className="app-profiles">
        {adventures.map((adventure, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, type: "tween" }}
            className="app-profile-item"
            key={adventure.title + index}
            onClick={() => openAdventureInNewTab(adventure.imgNewTab)}
            style={{ cursor: "pointer" }}
          >
            <img
              className="square-picture rounded-5"
              src={adventure.imgUrl}
              alt={adventure.title}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {adventure.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {adventure.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Card;
