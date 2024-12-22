import { Modal, Form, Input, Descriptions } from "antd";

const EditCardModal = ({ context, open, setOpen, data, setData }) => {
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

  const createFields = (context) => {
    switch (context) {
      case "education":
        return (
          <>
            <Form.Item label="Title" name="title" hasFeedback>
              <Input placeholder="e.g. Bachelor in Computer Science" />
            </Form.Item>

            <Form.Item label="Institution" name="description" hasFeedback>
              <Input placeholder="e.g. University of Miami" />
            </Form.Item>

            <Form.Item label="Start year" name="startYear" hasFeedback>
              <Input placeholder="e.g. 2019" />
            </Form.Item>

            <Form.Item label="End year" name="endYear" hasFeedback>
              <Input placeholder="e.g. 2024" />
            </Form.Item>
          </>
        );

      case "work experience":
        return (
          <>
            <Form.Item label="Title" name="title" hasFeedback>
              <Input placeholder="e.g. Web Developer" />
            </Form.Item>

            <Form.Item label="Company" name="description" hasFeedback>
              <Input placeholder="e.g. Google" />
            </Form.Item>

            <Form.Item label="Start year" name="startYear" hasFeedback>
              <Input placeholder="e.g. 2019" />
            </Form.Item>

            <Form.Item label="End year" name="endYear" hasFeedback>
              <Input placeholder="e.g. Present" />
            </Form.Item>
          </>
        );

      case "skill":
        return (
          <>
            <Form.Item label="Skill" name="title" hasFeedback>
              <Input placeholder="e.g. JavaScript" />
            </Form.Item>

            <Form.Item label="Proficiency" name="description" hasFeedback>
              <Input placeholder="e.g. Expert" />
            </Form.Item>
          </>
        );

      default:
        return (
          <p>No context or invalid context provided... (context: {context})</p>
        );
    }
  };

  return (
    <Modal
      title={`Edit ${context || "card"}`}
      open={open}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Form
        name={`edit-card-form-${context}-${data.id}`}
        layout="vertical"
        form={form}
        initialValues={{
          title: data.title,
          description: data.description,
          startYear: data.startYear,
          endYear: data.endYear,
        }}
        onFinish={onSubmit}
      >
        {createFields(context)}
      </Form>
    </Modal>
  );
};

export default EditCardModal;
