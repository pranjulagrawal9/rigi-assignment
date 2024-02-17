import { useSearchParams } from "react-router-dom";
import "./App.css";
import Playlist from "./components/Playlist";
import VideoPlayer from "./components/VideoPlayer";
import { data } from "./data";
import { useEffect } from "react";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  const video = data?.find((video) => video.id === searchParams.get("v"));

  useEffect(() => {
    setSearchParams({ v: data[0].id });
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-[90%] lg:w-[95%] lg:flex-row gap-2">
        <VideoPlayer className="lg:w-[70%] h-fit" src={video?.sources[0]} />
        <Playlist data={data} />
      </div>
    </div>
  );
}

export default App;
