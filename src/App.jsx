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

  function handleVideoChangeOnEnd() {
    const currentVideoIndex = videos.indexOf(currVideo);
    setActiveVideoIndex(
      currentVideoIndex < videos.length - 1 ? currentVideoIndex + 1 : 0
    );
  }

  useEffect(() => {
    setSearchParams({ v: videos[activeVideoIndex].id });
  }, [activeVideoIndex]);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-[90%] lg:w-[95%] lg:flex-row gap-2">
        <VideoPlayer
          className="lg:w-[70%] h-fit"
          src={currVideo?.sources[0]}
          onEnd={handleVideoChangeOnEnd}
        />
        <Playlist
          videos={videos}
          onChange={setVideos}
          activeVideoIndex={activeVideoIndex}
        />
      </div>
    </div>
  );
}

export default App;
