import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./FollowButton.module.css";

const FollowButton = ({ targetMemberId }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    // follow un follow logic
    setIsFollowing(!isFollowing);
    console.log(
      `${
        isFollowing ? "Unfollowing" : "Following"
      } member with ID: ${targetMemberId}`
    );
  };

  return (
    <button
      className={`${styles.followBtn} ${isFollowing ? styles.followed : ""}`}
      onClick={handleFollowClick}
    >
      {isFollowing ? (
        <>
          Following <FontAwesomeIcon icon={faCheck} />
        </>
      ) : (
        <>
          Follow <FontAwesomeIcon icon={faPlus} />
        </>
      )}
    </button>
  );
};

export default FollowButton;
