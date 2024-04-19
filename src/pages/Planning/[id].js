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
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    getCurrentKMLFile(id);
  }, []);

  const getCurrentKMLFile = async (postId) => {
    try {
      await axiosClient.get(`/posts/${postId}/kml-file`).then((res) => {
        setCurrentKML(res.data);
        console.log("current kmlfile", res.data);
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
              Authorization: `Bearer ${token}`,
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="custom-card p-4 shadow-lg rounded bg-light">
            <div className="row mb-4">
              <div className="col-md-6 mb-4">
                <KMLEditor onChangeKML={onChangeKML} />
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <input
                    type="text"
                    aria-label="Title"
                    placeholder="Title"
                    className="form-control mb-3 custom-input"
                    onChange={onChangeFields("title")}
                    value={formDetails.title}
                  />
                </div>
                <div className="input-wrapper">
                  <textarea
                    aria-label="Description"
                    placeholder="Description"
                    className="form-control mb-3 custom-input"
                    onChange={onChangeFields("description")}
                    value={formDetails.description}
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    type="number"
                    onChange={onChangeFields("budget")}
                    value={formDetails.budget}
                    className="form-control mb-3 custom-input"
                  />
                </div>
              </div>
            </div>
            {showError && (
              <div className="alert alert-danger mb-3" role="alert">
                Save Map Before Proceeding!
              </div>
            )}
            <button
              className="btn btn-primary rounded-pill publish-button"
              onClick={handlePublishPost}
              style={{ backgroundColor: "#196f5d", borderColor: "#196f5d" }}
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default CreateNewPost;
