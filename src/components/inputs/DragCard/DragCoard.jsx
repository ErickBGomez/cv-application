import { MdDragIndicator } from "react-icons/md";

const DragCard = ({ title, description, smalltext }) => {
  return (
    <div className="drag-card">
      <div className="drag-indicator">
        <MdDragIndicator />
      </div>
      <div className="content">
        <div className="drag-card-title">{title}</div>
        <div className="drag-card-description">{description}</div>
        <div className="drag-card-smalltext">{smalltext}</div>
      </div>
    </div>
  );
};

export default DragCard;
