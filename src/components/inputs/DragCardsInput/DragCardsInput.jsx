import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DragCard from "../DragCard/DragCard";

const DragCardsInput = ({ entries, setEntries, context = "card" }) => {
  return (
    <>
      {entries &&
        entries.map((entry) => (
          <DragCard key={entry.id} data={entry} setData={setEntries} />
        ))}
      <Button icon={<PlusOutlined />}>Add {context}</Button>
    </>
  );
};

export default DragCardsInput;
