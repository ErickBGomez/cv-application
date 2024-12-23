import { Modal, Form, Input, Rate } from "antd";
import "./EditCardModal.scss";
import { capitalize } from "../../../helpers/strings";

const EditCardModal = ({
  context,
  open,
  setOpen,
  data,
  setData,
  mode = "create",
}) => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    // Create new data entry in create mode
    if (mode === "create") {
      setData((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...values,
        },
      ]);
      if (mode === "create") form.resetFields();
      return;
    }

    // Update current data in edit mode, without mutating the rest of entries
    // Use spread operator to only change the present data in the modal form
    if (mode === "edit") {
      setData((prev) =>
        prev.map((item) =>
          item.id === data.id ? { ...data, ...values } : item
        )
      );
      return;
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleOk = () => {
    form.submit();
    setOpen(false);
  };

  // Create fields based on the context provided
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
      // Set the title based on the mode and context
      title={`${capitalize(mode)} ${context || "card"}`}
      open={open}
      onOk={handleOk}
      // Set the text of the OK button based on the mode
      okText={mode === "edit" ? "Save" : capitalize(mode)}
      onCancel={handleCancel}
      centered
      closable={false}
      maskClosable={false}
      width={380}
    >
      <Form
        // Set the form name based on the mode and context
        name={
          mode === "edit"
            ? `edit-card-form-${context}-${data.id}`
            : `create-card-form-${context}`
        }
        layout="vertical"
        className="card-form"
        form={form}
        // Set the initial values based on the data provided
        // If no data is provided, set the initial values to null
        initialValues={
          data
            ? {
                title: data.title,
                description: data.description,
                startYear: data.startYear,
                endYear: data.endYear,
              }
            : null
        }
        onFinish={onSubmit}
      >
        <div className="inputs">{createFields(context)}</div>
      </Form>
    </Modal>
  );
};

export default EditCardModal;
