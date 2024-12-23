import { Modal, Form, Input, Rate } from "antd";
import "./EditCardModal.scss";

const EditCardModal = ({ context, open, setOpen, data, setData }) => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    console.log(values);

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

            <div className="years">
              <Form.Item label="Start year" name="startYear" hasFeedback>
                <Input placeholder="e.g. 2019" />
              </Form.Item>
              <Form.Item label="End year" name="endYear" hasFeedback>
                <Input placeholder="e.g. 2024" />
              </Form.Item>
            </div>
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
              <Rate />
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
        className="edit-card-form"
        form={form}
        initialValues={{
          title: data.title,
          description: data.description,
          startYear: data.startYear,
          endYear: data.endYear,
        }}
        onFinish={onSubmit}
      >
        <div className="inputs">{createFields(context)}</div>
      </Form>
    </Modal>
  );
};

export default EditCardModal;
