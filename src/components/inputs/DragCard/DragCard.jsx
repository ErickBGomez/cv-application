import { MdDragIndicator } from "react-icons/md";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import "./DragCard.scss";
import { useState } from "react";

const DragCard = ({ context, data, setData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <EditCardModal
        context={context}
        open={modalOpen}
        setOpen={setModalOpen}
        data={data}
        setData={setData}
      />
      <div className="drag-card" onClick={() => setModalOpen(true)}>
        <div className="drag-indicator">
          <MdDragIndicator />
        </div>
        <div className="content">
          <div className="drag-card-title">{data.title}</div>
          <div className="drag-card-description">
            {data.institution || data.punctuation}
          </div>
          {data.years && (
            <div className="drag-card-smalltext">
              {data.years.start} - {data.years.end}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DragCard;
