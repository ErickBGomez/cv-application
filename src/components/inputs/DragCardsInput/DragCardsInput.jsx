import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DragCard from "../DragCard/DragCard";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

const DragCardsInput = ({ entries, setEntries, context = "card" }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      // Swap position of the dragged item with the item it was dropped on
      const oldIndex = entries.findIndex((entry) => entry.id === active.id);
      const newIndex = entries.findIndex((entry) => entry.id === over.id);

      const newEntries = [...entries];
      newEntries.splice(oldIndex, 1);
      newEntries.splice(newIndex, 0, entries[oldIndex]);

      setEntries(newEntries);
    }
  };

  return (
    <>
      <EditCardModal
        context={context}
        open={modalOpen}
        setOpen={setModalOpen}
        setData={setEntries}
      />
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={entries}>
          {entries &&
            entries.map((entry) => (
              <DragCard
                key={entry.id}
                context={context}
                data={entry}
                setData={setEntries}
              />
            ))}
        </SortableContext>
      </DndContext>

      <Button icon={<PlusOutlined />} onClick={handleOpenModal}>
        Add {context}
      </Button>
    </>
  );
};

export default DragCardsInput;
