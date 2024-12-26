import { useEffect, useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";
import DragCard from "../DragCard/DragCard";

// Use onChange from Ant Design Form.Item to update the form values
const DragCardsInput = ({ onChange, context = "card" }) => {
  const [entries, setEntries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Set sensors to fix problem with onClick events
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // Update form values when entries change
  useEffect(() => {
    onChange(entries);
  }, [entries]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    // Avoid reordering if the dragged item is dropped on itself
    if (active && over && active.id !== over.id) {
      // Swap position of the dragged item with the item it was dropped on
      setEntries((prevEntries) => {
        const oldIndex = entries.findIndex((entry) => entry.id === active.id);
        const newIndex = entries.findIndex((entry) => entry.id === over.id);

        return arrayMove(prevEntries, oldIndex, newIndex);
      });
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
      <DndContext
        sensors={sensors}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
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
