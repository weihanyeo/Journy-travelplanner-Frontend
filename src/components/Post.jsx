import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faStar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const [expandedComments, setExpandedComments] = useState(false);
  const [expandedCommentIndex, setExpandedCommentIndex] = useState(-1);
  const MAX_COMMENTS_SHOWN = 5;

  // Fake post details
  const postTitle = "Explore the Wonders of Machu Picchu";
  const postDescription =
    "Immerse yourself in the ancient Inca ruins and breathtaking landscapes of Machu Picchu.";
  const postImageUrl = "/paris.jpg";
  const postImageNewTab = "./paris.jpg";
  const postRating = "4.9";
  const postReviewCount = "(218)";
  const postTravelers = 25;
  const postTotalExpense = "$2,500 USD";
  const postTags = ["adventure", "history"];
  const postLikes = 1247;
  const postComments = [
    {
      username: "trekker_123",
      text: "This has been on my bucket list for years!",
    },
    {
      username: "explorer_456",
      text: "The views from Machu Picchu are simply breathtaking!",
    },
    {
      username: "adventurer_789",
      text: "Can't wait to explore the ancient Inca ruins!",
    },
    {
      username: "traveler_abc",
      text: "Machu Picchu is a must-visit destination for any nature lover.",
    },
    {
      username: "hiker_xyz",
      text: "The hike to Machu Picchu is challenging but so rewarding!",
    },
    {
      username: "historian_123",
      text: "Fascinating to learn about the history and culture of the Incas.",
    },
    {
      username: "photographer_456",
      text: "Capturing the perfect shot at Machu Picchu is a real challenge!",
    },
    {
      username: "wanderer_789",
      text: "I can't wait to get lost in the stunning landscapes of Machu Picchu.",
    },
    {
      username: "explorer_abc",
      text: "This trip is going to be the adventure of a lifetime!",
    },
    {
      username: "adventurer_xyz",
      text: "Machu Picchu has been on my travel list for as long as I can remember.",
    },
  ];

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
        //onClick={() => router.push(`/Post/${id}`)}
        onClick={() => router.push("/Post")}
      >
        <div className="card-header d-flex align-items-center mw-90">
          <img
            src="https://via.placeholder.com/40"
            className="rounded-circle mr-2"
            alt="User"
          />
          <div>
            <h6 className="mb-0">Username</h6>
            <small className="text-muted">Location</small>
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
            alt={postTitle}
          />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{postTitle}</h5>
              <p className="card-text">{postDescription}</p>
            </div>
            <div className="col">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              <FontAwesomeIcon icon={faComment} className="mr-2" />
              <FontAwesomeIcon icon={faStar} className="mr-2" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="badge badge-primary mr-2">{postTags[0]}</span>
              <span className="badge badge-primary mr-2">{postTags[1]}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} className="mr-1" />
              <span>{postTravelers}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="post-comments">
            {postComments.slice(0, MAX_COMMENTS_SHOWN).map((comment, index) => (
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
                    {expandedCommentIndex === index ? "View Less" : "View More"}
                  </button>
                )}
              </div>
            ))}
            {expandedComments &&
              postComments.slice(MAX_COMMENTS_SHOWN).map((comment, index) => (
                <div key={index} className="post-comment">
                  <strong>{comment.username}</strong>: {comment.text}
                </div>
              ))}
            {!expandedComments && postComments.length > MAX_COMMENTS_SHOWN && (
              <div className="d-flex justify-content-center">
                <button className="btn btn-link" onClick={toggleExpandComments}>
                  View More Comments
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
