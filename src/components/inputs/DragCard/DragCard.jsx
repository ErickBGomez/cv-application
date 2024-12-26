import { useState } from "react";
import { Rate, Popconfirm } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { MdDragIndicator, MdClose } from "react-icons/md";
import CardModal from "../../modals/CardModal/CardModal";
import "./DragCard.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DragCard = ({ context, data, setData }) => {
  const { id, title, description, startYear, endYear } = data;
  const [modalOpen, setModalOpen] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const dragStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Dragging card should be on top of other cards
    zIndex: isDragging ? 9999 : "auto",
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleDeleteCard = () => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAvoidPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <CardModal
        mode="edit"
        context={context}
        open={modalOpen}
        setOpen={setModalOpen}
        data={data}
        setData={setData}
      />
      <div
        className="drag-card"
        onClick={handleOpenModal}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={dragStyle}
      >
        <div className="drag-indicator">
          <MdDragIndicator />
        </div>
        <div className="content">
          <div className="drag-card-title">{title}</div>
          <div className="drag-card-description">
            {context === "skill" ? (
              <Rate value={description} disabled />
            ) : (
              description
            )}
          </div>
          {startYear && endYear && (
            <div className="drag-card-smalltext">
              {startYear} - {endYear}
            </div>
          )}
        </div>
        <Popconfirm
          title={`Delete this ${context}?`}
          description={`Are you sure to delete this ${context}?`}
          okText="Yes"
          okType="danger"
          cancelText="No"
          icon={<ExclamationCircleOutlined style={{ color: "red" }} />}
          onConfirm={handleDeleteCard}
          onClick={handleAvoidPropagation}
          onCancel={handleAvoidPropagation}
        >
          <div className="delete-card">
            <MdClose />
          </div>
        </Popconfirm>
      </div>
    </>
  );
};

export default DragCard;
