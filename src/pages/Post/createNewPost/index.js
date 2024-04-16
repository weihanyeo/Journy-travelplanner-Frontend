import { useEffect } from "react";
import dynamic from "next/dynamic";

const KMLEditor = dynamic(
  () => import("../../../components/KMLHandlers/KMLEditor"),
  { ssr: false }
);
const CreateNewPost = () => {
  return (
    <div className="flex flex-col gap-3 p-10">
      <KMLEditor />
      <input
        type="text"
        aria-label="Title"
        placeholder="Title"
        className="border-2"
      ></input>
      <textarea
        className="border-2"
        aria-label="Description"
        placeholder="Description"
      ></textarea>
      <button className="border-2 bg-blue-500">Publish Post</button>
    </div>
  );
};

export default CreateNewPost;
