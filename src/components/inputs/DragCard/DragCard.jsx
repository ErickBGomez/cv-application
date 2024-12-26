import { useState } from "react";
import { Rate, Popconfirm } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { MdDragIndicator, MdClose } from "react-icons/md";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import "./DragCard.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DragCard = ({ context, data, setData }) => {
  const { id, title, description, startYear, endYear } = data;
  const [modalOpen, setModalOpen] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleDeleteCard = (e) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAvoidPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <EditCardModal
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
        style={style}
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
