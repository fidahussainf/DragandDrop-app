import { Data } from "../interfaces";

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

const CardItem = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };
  
  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className="p-4 bg-slate-600 rounded-md cursor-pointer mb-2 animate-fadeIn"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p className="text-xl font-bold">{data.content}</p>
    </div>
  );
};

export default CardItem;
