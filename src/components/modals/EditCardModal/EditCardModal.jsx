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

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleOk = () => {
    form.submit();
    setOpen(false);
  };

  const createFields = (context) => {
    switch (context) {
      case "education":
        return (
          <>
            <Form.Item label="Education" name="title">
              <Input placeholder="e.g. Bachelor in Computer Science" />
            </Form.Item>

            <Form.Item label="Institution" name="description">
              <Input placeholder="e.g. University of Miami" />
            </Form.Item>

            <div className="years">
              <Form.Item label="Start year" name="startYear">
                <Input placeholder="e.g. 2019" />
              </Form.Item>
              <Form.Item label="End year" name="endYear">
                <Input placeholder="e.g. 2024" />
              </Form.Item>
            </div>
          </>
        );

      case "work experience":
        return (
          <>
            <Form.Item label="Position" name="title">
              <Input placeholder="e.g. Web Developer" />
            </Form.Item>

            <Form.Item label="Company" name="description">
              <Input placeholder="e.g. Google" />
            </Form.Item>

            <div className="years">
              <Form.Item label="Start year" name="startYear">
                <Input placeholder="e.g. 2019" />
              </Form.Item>
              <Form.Item label="End year" name="endYear">
                <Input placeholder="e.g. Present" />
              </Form.Item>
            </div>
          </>
        );

      case "skill":
        return (
          <>
            <Form.Item label="Skill" name="title">
              <Input placeholder="e.g. JavaScript" />
            </Form.Item>

            <Form.Item label="Proficiency" name="description">
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
      onCancel={handleCancel}
      centered
      closable={false}
      maskClosable={false}
      width={380}
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
