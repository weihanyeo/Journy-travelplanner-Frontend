import dynamic from "next/dynamic";

const KMLEditor = dynamic(
  () => import("../../../components/KMLHandlers/KMLEditor"),
  { ssr: false }
);
const CreateNewPost = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-3 tw-p-10">
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
      <button className="tw-border-2 tw-bg-blue-500">Publish Post</button>
    </div>
  );
};

export default CreateNewPost;
