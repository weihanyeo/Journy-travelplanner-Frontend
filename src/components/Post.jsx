import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Post = ({ postDetails }) => {
  const router = useRouter();
  const {
    postId = "",
    postPictureURL = "",
    title = "Title goes here",
    description = "Description goes here",
    budget = 99,
    locations = [],
    likeCount = 10,
    comments = [],
  } = postDetails;
  const [expandedComments, setExpandedComments] = useState(false);
  const [expandedCommentIndex, setExpandedCommentIndex] = useState(-1);
  const MAX_COMMENTS_SHOWN = 3;

  // Fake post details
  const postImageUrl = "/paris.jpg";

  const formattedComments = comments.map((comment) => {
    return {
      username: comment.commenter.username,
      text: comment.commentDetails,
    };
  });

  const toggleExpandComments = () => {
    setExpandedComments(!expandedComments);
  };

  const toggleExpandComment = (index) => {
    setExpandedCommentIndex(index === expandedCommentIndex ? -1 : index);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <div
        className="card mx-auto shadow-sm mw-90"
        style={{ maxWidth: "720px" }}
      >
        <div className="card-header d-flex align-items-center mw-90">
          <img
            src="https://via.placeholder.com/40"
            className="rounded-circle mr-2"
            alt="User"
          />
          <div>
            <h6 className="mb-0">Username</h6>
            {locations.map((location) => {
              return <small className="text-muted">{location}, </small>;
            })}
          </div>
        </div>

        <div
          style={{
            width: "100%", // Set width to 100% to match parent div
            height: "720px", // Set height as desired
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={postImageUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              backgroundColor: "black",
            }}
            alt={title}
          />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
            <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
            <span>Budget: {budget}</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="post-comments">
            {formattedComments
              .slice(0, MAX_COMMENTS_SHOWN)
              .map((comment, index) => (
                <div key={index} className="post-comment">
                  <strong>{comment.username}</strong>:{" "}
                  {expandedCommentIndex === index
                    ? comment.text
                    : comment.text.length > 50
                    ? `${comment.text.substring(0, 50)}...`
                    : comment.text}
                  {comment.text.length > 50 && (
                    <button
                      className="btn btn-link p-0"
                      onClick={() => toggleExpandComment(index)}
                    >
                      {expandedCommentIndex === index
                        ? "View Less"
                        : "View More"}
                    </button>
                  )}
                </div>
              ))}
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-link"
                onClick={() => router.push(`/Post/${postId}`)}
              >
                View Post Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
