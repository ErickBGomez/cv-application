import { Modal } from "antd";

const EditCardModal = ({ open, setOpen }) => {
  return (
    <Modal
      title="Edit Card"
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <p>Some contents...</p>
    </Modal>
  );
};

export default EditCardModal;
