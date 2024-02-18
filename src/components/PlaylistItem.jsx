import { forwardRef } from "react";
import { MdDragHandle } from "react-icons/md";

const PlaylistItem = forwardRef(function PlaylistItem(
  { thumb, title, subtitle, provided, onClick, isActive },
  ref
) {
  return (
    <div ref={ref}>
      <div
        className={`flex py-2 items-center lg:mt-0 cursor-pointer  ${
          isActive ? "bg-gray-700" : "bg-gray-900"
        } hover:bg-gray-700`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        onClick={onClick}
      >
        <div {...provided.dragHandleProps}>
          <MdDragHandle size={24} />
        </div>
        <div className="w-28 mr-2">
          <img src={thumb} alt={title} className="rounded-lg" />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-gray-300 text-xs">{subtitle}</p>
        </div>
      </div>
    </div>
  );
});

export default PlaylistItem;
