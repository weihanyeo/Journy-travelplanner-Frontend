import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axiosClient from "../../others/network/axiosClient";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const KMLDisplay = dynamic(
  () => import("../../components/KMLHandlers/KMLDisplay"),
  { ssr: false }
);

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentKML, setCurrentKML] = useState();
  const [postDetails, setPostDetails] = useState();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState();

  useEffect(() => {
    getCurrentPost();
    getCurrentUser();
  }, []);

  const getCurrentPost = async () => {
    try {
      await axiosClient.get(`/posts/${id}`).then((res) => {
        //setCurrentKML(res.data);
        setPostDetails(res.data);
        setComments(res.data.comments);
        getCurrentKMLFile(res.data.postId);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentUser = async () => {
    try {
      await axiosClient.get(`/members/my-profile`).then((res) => {
        setUsername(res.data.username);
        console.log("this username:", res.data.username);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentKMLFile = async (postId) => {
    try {
      await axiosClient.get(`/posts/${postId}/kml-file`).then((res) => {
        setCurrentKML(res.data);
        console.log(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onSendNewComment = async () => {
    const newCommentObject = {
      commentDetails: newComment,
      commenter: { username: username },
    };
    setNewComment("");
    setComments([...comments, newCommentObject]);
    try {
      await axiosClient
        .post(`/posts/${id}/comments`, {
          commentDetails: newComment,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <div
        className="card mx-auto shadow mw-90"
        style={{
          maxWidth: "720px",
          borderRadius: "15px",
          backgroundColor: "#f8f0ca",
          marginBottom: "20px",
          border: "none",
        }}
      >
        {postDetails ? (
          <div className="tw-flex tw-flex-col tw-p-10 tw-gap-5">
            <div className="tw-flex tw-flex-row tw-justify-evenly tw-items-center">
              {currentKML && <KMLDisplay kmlFile={currentKML} />}
              <div className="tw-flex tw-flex-col">
                <p>user profile pic</p>
                <p>user name</p>
                <p>user about me</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => router.push(`/Planning/${id}`)}
                >
                  Fork this itinerary
                </button>
              </div>
            </div>
            <div>
              <h5 className="card-title" style={{ color: "#141451" }}>
                {postDetails.title}
              </h5>
              <p className="card-text">{postDetails.description}</p>
              <div
                className="card-body"
                style={{ border: "2px solid #196f5d", padding: "20px" }}
              >
                <h6 style={{ marginBottom: "10px" }}>
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ color: "#141451" }}
                    className="mr-2"
                  />
                  Comments Section:
                </h6>
                {comments.length > 0 &&
                  comments.map((comment, index) => (
                    <div key={index} className="tw-flex tw-flex-row mb-2">
                      <strong className="tw-mr-2">
                        {comment.commenter.username}:
                      </strong>
                      <p>{comment.commentDetails}</p>
                    </div>
                  ))}
                <div className="tw-flex tw-flex-row tw-gap-5">
                  <input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment!"
                    className="form-control"
                  />
                  {newComment && (
                    <button
                      onClick={onSendNewComment}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#196f5d",
                        borderColor: "#196f5d",
                      }}
                    >
                      Send Comment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default PostDetails;
