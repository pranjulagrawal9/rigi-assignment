import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultAudioLayout,
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

function VideoPlayer({ ...props }) {
  return (
    <MediaPlayer {...props} title="Sprite Fight" crossOrigin autoPlay>
      <MediaProvider />
      <DefaultAudioLayout icons={defaultLayoutIcons} />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
}

export default VideoPlayer;
