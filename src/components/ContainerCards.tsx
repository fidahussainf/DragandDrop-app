import { Data, Status } from "../interfaces";
import CardItem from "./CardItem";

interface Props {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handleUpdateList: (id: number, status: Status) => void;
  handleDragging: (dragging: boolean) => void;
}

const ContainerCards = ({ items, status, isDragging, handleUpdateList, handleDragging }: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div
      className={`p-4 rounded-md border-2 transition-all duration-300 ${
        isDragging ? "border-dashed bg-opacity-50" : ""
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="text-center font-semibold capitalize">{status} heroes</p>
      {items
        .filter(item => item.status === status)
        .map(item => (
          <CardItem key={item.id} data={item} handleDragging={handleDragging} />
        ))}
    </div>
  );
};

export default ContainerCards;
