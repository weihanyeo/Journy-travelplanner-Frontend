import dynamic from "next/dynamic";
import axiosClient from "../../others/network/axiosClient";
import { useState } from "react";
import { useRouter } from "next/router";

const KMLEditor = dynamic(
  () => import("../../components/KMLHandlers/KMLEditor"),
  { ssr: false }
);
const CreateNewPost = () => {
  const router = useRouter();
  const [showError, setShowError] = useState(false);

  const onChangeFields = (field) => (e) => {
    if (field == "budget") {
      setFormDetails({
        ...formDetails,
        [field]: Number(e.target.value),
      });
    }
    setFormDetails({
      ...formDetails,
      [field]: e.target.value,
    });
  };

  const [formDetails, setFormDetails] = useState({
    postPictureURL: "",
    title: "",
    description: "",
    budget: 0,
    locations: [],
  });
  const [file, setFile] = useState();

  const handlePublishPost = async () => {
    if (!file) {
      setShowError(true);
      return;
    }
    try {
      await axiosClient.post("/posts", formDetails).then((res) => {
        handlePostKMLFile(res.data.postId);
      });
      router.push("/Discover");
    } catch (e) {
      console.error(e);
    }
  };

  const handlePostKMLFile = async (postId) => {
    const token = localStorage.getItem("jwt");
    try {
      await axiosClient
        .post(
          `/posts/${postId}/kml-file`,
          { file: file },
          {
            headers: {
              Authorization: `Bearer ${token} `,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
      router.push("/Discover");
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeKML = (kmlfile) => {
    setFile(kmlfile);
  };

  return (
    <div className="tw-flex tw-flex-col tw-gap-3 tw-p-10">
      <KMLEditor onChangeKML={onChangeKML} />
      <input
        type="text"
        aria-label="Title"
        placeholder="Title"
        className="border-2"
        onChange={onChangeFields("title")}
        value={formDetails.title}
      ></input>
      <textarea
        className="border-2"
        aria-label="Description"
        placeholder="Description"
        onChange={onChangeFields("description")}
        value={formDetails.description}
      ></textarea>
      <input
        type="number"
        onChange={onChangeFields("budget")}
        value={formDetails.budget}
      ></input>
      {showError && (
        <div class="alert alert-danger" role="alert">
          Save Map Before Proceeding!
        </div>
      )}
      <button
        className="tw-border-2 tw-bg-blue-500"
        onClick={handlePublishPost}
      >
        Publish Post
      </button>
    </div>
  );
};

export default CreateNewPost;
