import "./App.css";
import Playlist from "./components/Playlist";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-[90%] md:w-[95%]">
        <VideoPlayer src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4" />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
