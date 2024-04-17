//to be deleted
import dynamic from "next/dynamic";

const KMLDisplay = dynamic(
  () => import("../../components/KMLHandlers/KMLDisplay"),
  { ssr: false }
);

const PostDetails = () => {
  return (
    <div className="tw-flex tw-flex-col tw-p-10 tw-gap-5">
      <div className="tw-flex tw-flex-row tw-justify-evenly tw-items-center">
        <KMLDisplay />
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
