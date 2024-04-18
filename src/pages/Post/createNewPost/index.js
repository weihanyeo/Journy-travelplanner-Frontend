import dynamic from "next/dynamic";
import axiosClient from "../../../others/network/axiosClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const KMLEditor = dynamic(
  () => import("../../../components/KMLHandlers/KMLEditor"),
  { ssr: false }
);

const CreateNewPost = () => {
  const router = useRouter();

  const onChangeFields = (field) => (e) => {
    if (field === "budget") {
      setFormDetails({
        ...formDetails,
        [field]: Number(e.target.value),
      });
    } else {
      setFormDetails({
        ...formDetails,
        [field]: e.target.value,
      });
    }
  };

  const getAllPosts = async () => {
    try {
      const res = await axiosClient.get("/posts");
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const [formDetails, setFormDetails] = useState({
    postPicture: "",
    postTitle: "",
    postDescription: "",
    budget: 0,
    locations: ["singapore"],
  });
  const [file, setFile] = useState();

  const handlePublishPost = async () => {
    try {
      const res = await axiosClient.post("/posts", formDetails);
      await handlePostKMLFile(res.data.postId);
    } catch (e) {
      console.error(e);
    }
  };

  const handlePostKMLFile = async (postId) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axiosClient.post(`/posts/${postId}/kml-file`, formData, {
        headers: {
          Authorization: "Bearer your-access-token",
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      router.push("/Discover");
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeKML = (kmlfile) => {
    setFile(kmlfile);
  };

  return (
    <div className="container mt-5">
      <KMLEditor onChangeKML={onChangeKML} />
      <div className="row mt-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            aria-label="Title"
            placeholder="Title"
            onChange={onChangeFields("postTitle")}
            value={formDetails.postTitle}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            aria-label="Budget"
            placeholder="Budget"
            onChange={onChangeFields("budget")}
            value={formDetails.budget}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <textarea
            className="form-control"
            aria-label="Description"
            placeholder="Description"
            onChange={onChangeFields("postDescription")}
            value={formDetails.postDescription}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={handlePublishPost}>
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
