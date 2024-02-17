import "./App.css";
import Playlist from "./components/Playlist";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-[90%] lg:w-[95%] lg:flex-row gap-2">
        <VideoPlayer
          className="lg:w-[70%] h-fit"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
        />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
