import { useState } from "react";
import { Rate, Popconfirm } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { MdDragIndicator, MdClose } from "react-icons/md";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import "./DragCard.scss";

const DragCard = ({ context, data, setData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleDeleteCard = (e) => {
    e.stopPropagation();
  };

  const handleAvoidPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <EditCardModal
        context={context}
        open={modalOpen}
        setOpen={setModalOpen}
        data={data}
        setData={setData}
      />
      <div className="drag-card" onClick={handleOpenModal}>
        <div className="drag-indicator">
          <MdDragIndicator />
        </div>
        <div className="content">
          <div className="drag-card-title">{data.title}</div>
          <div className="drag-card-description">
            {context === "skill" ? (
              <Rate value={data.description} disabled />
            ) : (
              data.description
            )}
          </div>
          {data.startYear && data.endYear && (
            <div className="drag-card-smalltext">
              {data.startYear} - {data.endYear}
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
