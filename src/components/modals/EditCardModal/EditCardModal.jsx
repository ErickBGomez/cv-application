import { Modal, Form, Input } from "antd";

const EditCardModal = ({ open, setOpen, data, setData }) => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    // Update current data, without mutating the rest of entries
    // Use spread operator to only change the present data in the modal form
    setData((prev) =>
      prev.map((item) => (item.id === data.id ? { ...data, ...values } : item))
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    form.submit();
    handleClose();
  };

  return (
    <Modal title="Edit Card" open={open} onOk={handleOk} onCancel={handleClose}>
      <Form
        name={`edit-card-form-id-${data.id}`}
        layout="vertical"
        form={form}
        initialValues={{
          title: data.title,
        }}
        onFinish={onSubmit}
      >
        <Form.Item label="Title" name="title" hasFeedback>
          <Input placeholder="e.g. Web Developer" />
        </Form.Item>

        <Form.Item label="Institution" name="institution" hasFeedback>
          <Input placeholder="e.g. Google" />
        </Form.Item>

        <Form.Item label="Start year" name="startYear" hasFeedback>
          <Input placeholder="e.g. 2019" />
        </Form.Item>

        <Form.Item label="End year" name="endYear" hasFeedback>
          <Input placeholder="e.g. Present" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCardModal;
