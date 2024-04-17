//to be deleted
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axiosClient from "../../others/network/axiosClient";
const KMLDisplay = dynamic(
  () => import("../../components/KMLHandlers/KMLDisplay"),
  { ssr: false }
);

const PostDetails = () => {
  const [currentKML, setCurrentKML] = useState();

  useEffect(() => {
    getCurrentKMLFile();
  }, []);

  const getCurrentKMLFile = async () => {
    try {
      await axiosClient.get("/posts/3/kml-file").then((res) => {
        setCurrentKML(res.data);
        console.log(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-p-10 tw-gap-5">
      <div className="tw-flex tw-flex-row tw-justify-evenly tw-items-center">
        {currentKML && <KMLDisplay kmlFile={currentKML} />}
        <div className="tw-flex tw-flex-col ">
          <p>user profile pic</p>
          <p>user name</p>
          <p>user about me</p>
          <button type="button" class="btn btn-primary">
            Fork this itinerary
          </button>
        </div>
      </div>
      <div className="tw-border-2">
        <p>Description</p>
      </div>
      <div className="tw-border-2">
        <textarea>Comments</textarea>
      </div>
    </div>
  );
};

export default PostDetails;
