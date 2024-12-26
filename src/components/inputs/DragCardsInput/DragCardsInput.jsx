import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DragCard from "../DragCard/DragCard";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DragCardsInput = ({ entries, setEntries, context = "card" }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <EditCardModal
        context={context}
        open={modalOpen}
        setOpen={setModalOpen}
        setData={setEntries}
      />
      {entries &&
        entries.map((entry) => (
          <DragCard
            key={entry.id}
            context={context}
            data={entry}
            setData={setEntries}
          />
        ))}
      <Button icon={<PlusOutlined />} onClick={handleOpenModal}>
        Add {context}
      </Button>
    </DndProvider>
  );
};

export default DragCardsInput;
