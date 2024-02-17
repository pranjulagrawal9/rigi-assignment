import React, { useState } from "react";
import PlaylistItem from "./PlaylistItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const data = [
  {
    id: "1",
    content: "Item 1",
  },
  {
    id: "2",
    content: "Item 2",
  },
  {
    id: "3",
    content: "Item 3",
  },
];

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

    const array = reorder(items, result.source.index, result.destination.index);

    setItems(array);
  }
  return (
    // <DragDropContext onDragEnd={onDragEnd}>
    //   <Droppable droppableId="droppable">
    //     {(provided, snapshot) => (
    //       <div ref={provided.innerRef} {...provided.droppableProps}>
    //         {items?.map((item, index) => (
    //           <Draggable key={item.id} draggableId={item.id} index={index}>
    //             {(provided, snapshot) => (
    //               <div
    //                 ref={provided.innerRef}
    //                 {...provided.draggableProps}
    //                 className="flex gap-3"
    //               >
    //                 <div className="flex gap-3">
    //                   <div {...provided.dragHandleProps}>Drag</div>
    //                   <p>{item.content}</p>
    //                 </div>
    //               </div>
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
    <>
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
    </>
  );
}

export default Playlist;
