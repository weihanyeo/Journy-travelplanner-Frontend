//to be deleted
import { useEffect } from "react";
import dynamic from "next/dynamic";

const KMLDisplay = dynamic(
  () => import("../../components/KMLHandlers/KMLDisplay"),
  { ssr: false }
);

const PostDetails = () => {
  return (
    <div className="flex flex-col p-10 gap-5">
      <div className="flex flex-row justify-evenly items-center">
        <KMLDisplay />
        <div className="flex flex-col ">
          <p>user profile pic</p>
          <p>user name</p>
          <p>user about me</p>
          <button type="button" class="btn btn-primary">
            Fork this itinerary
          </button>
        </div>
      </div>
      <div className="border-2">
        <p>Description</p>
      </div>
      <div className="border-2">
        <textarea>Comments</textarea>
      </div>
    </div>
  );
};

export default PostDetails;
