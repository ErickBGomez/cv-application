import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DragCard from "../DragCard/DragCoard";

const DragCardsInput = ({ entries, context = "card" }) => {
  return (
    <>
      {entries &&
        entries.map((entry) => (
          <DragCard
            key={entry.id}
            title={entry.title}
            description={entry.institution}
            smalltext={`${entry.startYear} - ${entry.endYear}`}
          />
        ))}
      <Button icon={<PlusOutlined />}>Add {context}</Button>
    </>
  );
};

export default DragCardsInput;
