import { useState } from "react";
import PlaylistItem from "./PlaylistItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { data } from "../data";

function Playlist() {
  const [items, setItems] = useState(data);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reorderedItems);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="max-h-[400px] overflow-auto"
          >
            {items?.map((item, index) => (
              <Draggable
                key={item.title}
                draggableId={item.title}
                index={index}
              >
                {(provided, snapshot) => (
                  <PlaylistItem provided={provided} {...item} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Playlist;
