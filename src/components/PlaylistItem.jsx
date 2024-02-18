import { forwardRef } from "react";
import { MdDragHandle } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const PlaylistItem = forwardRef(function PlaylistItem(
  { thumb, title, subtitle, provided, id },
  ref
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("v") === id;

  return (
    <div ref={ref}>
      <div
        className={`flex py-2 items-center mb-3 lg:mt-0 cursor-pointer ${
          isActive ? "bg-amber-100" : "bg-amber-200"
        } hover:bg-amber-100`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        onClick={() => setSearchParams({ v: id })}
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
    </div>
  );
});

export default PlaylistItem;
