import { useSearchParams } from "react-router-dom";
import "./App.css";
import Playlist from "./components/Playlist";
import VideoPlayer from "./components/VideoPlayer";
import { data } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const currVideo = videos?.find((video) => video.id === searchParams.get("v"));
  const [isDescExpand, setIsDescExpand] = useState(false);
  const description = !isDescExpand
    ? currVideo?.description.substring(0, 200)
    : currVideo?.description;

  function handleVideoChangeOnEnd() {
    const currentVideoIndex = videos.indexOf(currVideo);
    setActiveVideoIndex(
      currentVideoIndex < videos.length - 1 ? currentVideoIndex + 1 : 0
    );
  }

  useEffect(() => {
    setSearchParams({ v: videos[activeVideoIndex].id });
    setIsDescExpand(false);
  }, [activeVideoIndex]);

  return (
    <div className="flex justify-center my-10">
      <div className="w-[90%] lg:w-[95%] lg:relative">
        <div>
          <VideoPlayer
            className="lg:w-2/3"
            src={currVideo?.sources[0]}
            title={currVideo?.title}
            onEnd={handleVideoChangeOnEnd}
          />
          <div
            className={`text-white lg:absolute lg:w-2/3 mt-2 ${
              !isDescExpand ? "cursor-pointer" : ""
            }`}
            onClick={() => setIsDescExpand(true)}
          >
            <h2 className="text-xl font-bold mb-2">{currVideo?.title}</h2>
            <div className="bg-gray-800 p-2 rounded-md">
              <p>
                {description}{" "}
                {!isDescExpand ? (
                  <span className="font-bold">...more</span>
                ) : null}
              </p>

              <p
                className={`font-bold mt-3 cursor-pointer ${
                  !isDescExpand ? "hidden" : "block"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDescExpand(false);
                }}
              >
                Show less
              </p>
            </div>
          </div>
        </div>
        <Playlist
          videos={videos}
          onChange={setVideos}
          activeVideoIndex={activeVideoIndex}
          setActiveVideoIndex={setActiveVideoIndex}
        />
      </div>
    </div>
  );
}

export default App;
