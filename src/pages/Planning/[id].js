import dynamic from "next/dynamic";
import axiosClient from "../../others/network/axiosClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const KMLEditor = dynamic(
  () => import("../../components/KMLHandlers/KMLEditor"),
  { ssr: false }
);

const CreateNewPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentKML, setCurrentKML] = useState();

  useEffect(() => {
    getCurrentKMLFile(id);
  }, []);

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
      await axiosClient
        .post(
          `/posts/${postId}/kml-file`,
          { file: file },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4aW55aSIsImlhdCI6MTcxMzQ1NTY2MCwiZXhwIjoxNzEzNDU3MTAwfQ.4w8RPyl12D9m7_-1WJAoaxSlywz4LBDb1BP6IdI0ITA",
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
      {currentKML && (
        <KMLEditor onChangeKML={onChangeKML} initialKML={currentKML} />
      )}
      <input
        type="text"
        aria-label="Title"
        placeholder="Title"
        className="border-2"
        onChange={onChangeFields("postTitle")}
        value={formDetails.postTitle}
      ></input>
      <textarea
        className="border-2"
        aria-label="Description"
        placeholder="Description"
        onChange={onChangeFields("postDescription")}
        value={formDetails.postDescription}
      ></textarea>
      <input
        type="number"
        onChange={onChangeFields("budget")}
        value={formDetails.budget}
      ></input>
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
