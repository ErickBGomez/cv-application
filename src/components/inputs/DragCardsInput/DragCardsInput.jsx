import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const DragCardsInput = ({ entries, context = "card" }) => {
  return (
    <>
      <Button icon={<PlusOutlined />}>Add {context}</Button>
    </>
  );
};

export default DragCardsInput;
