import React from "react";
import styles from "./Comment.module.css";

const Comment = ({ username, date, profilePicture, commentDetails }) => {
  return (
    <div className="container my-5">
      <div className="card">
        <div className={`${styles.media}`}>
          <div className={`${styles.mediaHeader}`}>
            <img
              src={profilePicture}
              alt={username}
              className={`${styles.mediaImage}`}
            />
            <div>
              <h5 className="mt-0 mb-1">{username}</h5>
              <small className="text-muted">{date}</small>
            </div>
          </div>
          <p className={`${styles.commentDetails}`}>{commentDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
