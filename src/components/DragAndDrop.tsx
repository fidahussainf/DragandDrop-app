"use client"

import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { Status } from "@/interfaces";
import ContainerCards from "./ContainerCards";
import { data } from "@/assets";

const typesHero: Status[] = ["good", "normal", "bad"];

const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {typesHero.map(type => (
        <ContainerCards
          key={type}
          items={listItems}
          status={type}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};

export default DragAndDrop;
