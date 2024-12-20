import { MdDragIndicator } from "react-icons/md";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import "./DragCard.scss";
import { useState } from "react";

const DragCard = ({ title, description, smalltext }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <EditCardModal open={modalOpen} setOpen={setModalOpen} />
      <div className="drag-card" onClick={() => setModalOpen(true)}>
        <div className="drag-indicator">
          <MdDragIndicator />
        </div>
        <div className="content">
          <div className="drag-card-title">{title}</div>
          <div className="drag-card-description">{description}</div>
          <div className="drag-card-smalltext">{smalltext}</div>
        </div>
      </div>
    </>
  );
};

export default DragCard;
