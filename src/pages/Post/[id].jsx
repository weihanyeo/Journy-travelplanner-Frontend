import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axiosClient from "../../others/network/axiosClient";
import { useRouter } from "next/router";
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
    <div>
      {postDetails ? (
        <div className="tw-flex tw-flex-col tw-p-10 tw-gap-5">
          <div className="tw-flex tw-flex-row tw-justify-evenly tw-items-center">
            {currentKML && <KMLDisplay kmlFile={currentKML} />}
            <div className="tw-flex tw-flex-col ">
              <p>user profile pic</p>
              <p>user name</p>
              <p>user about me</p>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => router.push(`/Planning/${id}`)}
              >
                Fork this itinerary
              </button>
            </div>
          </div>
          <div>
            <b>{postDetails.title}</b>
            <p>{postDetails.description}</p>
            <div className="tw-border-2 tw-border-solid tw-p-5">
              <b className="tw-flex tw-mb-3 ">Comments Section:</b>
              {comments.length > 0 &&
                comments.map((comment) => {
                  return (
                    <div className="tw-flex tw-flex-row">
                      <b className="tw-mr-2">{comment.commenter.username}:</b>
                      <p>{comment.commentDetails}</p>
                    </div>
                  );
                })}
              <div className="tw-flex tw-flex-row tw-gap-5">
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment!"
                />
                {newComment && (
                  <button onClick={onSendNewComment}>Send Comment</button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PostDetails;
