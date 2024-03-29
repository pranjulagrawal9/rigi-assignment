import { useSearchParams } from "react-router-dom";
import "./App.css";
import Playlist from "./components/Playlist";
import VideoPlayer from "./components/VideoPlayer";
import { data } from "./data";
import { useEffect, useState } from "react";
import VideoInfo from "./components/VideoInfo";

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
  }, [activeVideoIndex, videos, setSearchParams]);

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
          <VideoInfo currVideo={currVideo} />
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
