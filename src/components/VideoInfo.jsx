import { useEffect, useState } from "react";

function VideoInfo({ currVideo }) {
  const [isDescExpand, setIsDescExpand] = useState(false);
  const description = !isDescExpand
    ? currVideo?.description.substring(0, 200)
    : currVideo?.description;

  useEffect(() => {
    setIsDescExpand(false);
  }, [currVideo]);

  return (
    <div
      className={`text-white lg:absolute lg:w-2/3 mt-2 ${
        !isDescExpand && currVideo?.description.length > 200
          ? "cursor-pointer"
          : ""
      }`}
    >
      <h2 className="text-xl font-bold mb-2">{currVideo?.title}</h2>
      <div
        className="bg-gray-800 p-2 rounded-md"
        onClick={() =>
          setIsDescExpand(currVideo?.description.length > 200 ? true : false)
        }
      >
        {description}{" "}
        {currVideo?.description.length > 200 &&
          (!isDescExpand ? (
            <span className="font-bold">...more</span>
          ) : (
            <p
              className="font-bold mt-3 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsDescExpand(false);
              }}
            >
              Show less
            </p>
          ))}
      </div>
    </div>
  );
}

export default VideoInfo;
