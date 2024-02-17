import { MdDragHandle } from "react-icons/md";

function PlaylistItem() {
  return (
    <div className="flex py-2 items-center mt-3 bg-amber-200 cursor-pointer">
      <div>
        <MdDragHandle size={24} />
      </div>
      <div className="w-1/4 mr-2">
        <img
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="w-3/4">
        <p className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p className="text-gray-600">By Subtitle</p>
      </div>
    </div>
  );
}

export default PlaylistItem;
