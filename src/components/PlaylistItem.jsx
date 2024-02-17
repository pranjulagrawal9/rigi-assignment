import { MdDragHandle } from "react-icons/md";

function PlaylistItem({ thumb, title, subtitle, provided }) {
  return (
    <div
      className="flex py-2 items-center mt-3 lg:mt-0 bg-amber-200 cursor-pointer"
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <div {...provided.dragHandleProps}>
        <MdDragHandle size={24} />
      </div>
      <div className="w-28 mr-2">
        <img src={thumb} alt={title} className="rounded-lg" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default PlaylistItem;
