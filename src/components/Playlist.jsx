import { useEffect, useRef, useState } from "react";
import PlaylistItem from "./PlaylistItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Playlist({ videos, onChange: setVideos, activeVideoIndex }) {
  const itemsRef = useRef([]);

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
      videos,
      result.source.index,
      result.destination.index
    );

    setVideos(reorderedItems);
  }

  useEffect(() => {
    const activeVideo = itemsRef?.current[activeVideoIndex];
    activeVideo.focus();
    activeVideo.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeVideoIndex]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="max-h-[400px] overflow-auto"
          >
            {videos?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <PlaylistItem
                    provided={provided}
                    {...item}
                    ref={(el) => (itemsRef.current[index] = el)}
                  />
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
