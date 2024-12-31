import { useState } from "react";
import PropTypes from "prop-types";
import { Rate, Popconfirm, App } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { MdDragIndicator, MdClose } from "react-icons/md";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CardModal from "../../modals/CardModal/CardModal";
import { capitalize } from "../../../helpers/strings";
import "./DragCard.scss";

const DragCard = ({ context, data, setData }) => {
  const { message } = App.useApp();

  const commonData = {
    id: data.id,
  };

  const yearData = {
    startYear: data.startYear,
    endYear: data.endYear,
  };

  const parsedData =
    context === "education"
      ? {
          ...commonData,
          ...yearData,
          title: data.degree,
          subtitle: data.institution,
          description: data.gpa,
        }
      : context === "work experience"
      ? {
          ...commonData,
          ...yearData,
          title: data.title,
          subtitle: data.company,
          description: data.description,
        }
      : context === "skill"
      ? {
          ...commonData,
          title: data.skill,
          subtitle: data.proficiency,
        }
      : null;

  const [modalOpen, setModalOpen] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: parsedData.id });

  const dragStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Dragging card should be on top of other cards
    zIndex: isDragging ? 10 : "auto",
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleDeleteCard = () => {
    setData((prevData) => prevData.filter((item) => item.id !== parsedData.id));
    message.success(`${capitalize(context)} deleted successfully`);
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
          <div className="drag-card-title">{parsedData.title}</div>
          <div className="drag-card-description">
            {context === "skill" ? (
              <Rate value={parsedData.subtitle} disabled />
            ) : (
              parsedData.subtitle
            )}
          </div>
          {parsedData.startYear && parsedData.endYear && (
            <div className="drag-card-smalltext">
              {parsedData.startYear} - {parsedData.endYear}
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

DragCard.propTypes = {
  context: PropTypes.string,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default DragCard;
