import {
  Modal,
  Form,
  Input,
  Rate,
  InputNumber,
  Checkbox,
  Button,
  App,
} from "antd";
import "./CardModal.scss";
import * as commonValidator from "../../../helpers/form-validators/common-validators";
import * as educationValidator from "../../../helpers/form-validators/education-modal-validators";
import * as workValidator from "../../../helpers/form-validators/work-experience-modal-validators";
import * as skillValidator from "../../../helpers/form-validators/skills-modal-validators";
import { capitalize } from "../../../helpers/strings";
import { useEffect, useState } from "react";

const CardModal = ({
  context,
  open,
  setOpen,
  data,
  setData,
  mode = "create",
}) => {
  const [checkPresent, setCheckPresent] = useState(false);
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onSubmit = (values) => {
    // Set end year to "Present" if the checkbox is checked
    if (checkPresent) values.endYear = "Present";

    // Create new data entry in create mode
    if (mode === "create") {
      setData((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...values,
        },
      ]);

      form.resetFields();
      message.success(`${capitalize(context)} created successfully`);
    }

    // Update current data in edit mode, without mutating the rest of entries
    // Use spread operator to only change the present data in the modal form
    else if (mode === "edit") {
      setData((prev) =>
        prev.map((item) =>
          item.id === data.id ? { ...data, ...values } : item
        )
      );

      message.success(`${capitalize(context)} updated successfully`);
    }

    closeModal();
  };

  const closeModal = () => {
    setOpen(false);
    setCheckPresent(false);
  };

  const handleCancel = () => {
    form.resetFields();
    closeModal();
  };

  const handleOk = () => {
    form.submit();
  };

  const yearInputs = () => {
    return (
      <div className="years">
        <Form.Item
          label="Start year"
          name="startYear"
          rules={commonValidator.startYearRules}
        >
          <InputNumber placeholder="e.g. 2019" />
        </Form.Item>
        <div className="end-year">
          <Form.Item
            label="End year"
            name="endYear"
            rules={[
              ...commonValidator.endYearRules,
              { required: !checkPresent, message: "End year is required" },
            ]}
          >
            <InputNumber placeholder="e.g. 2024" disabled={checkPresent} />
          </Form.Item>
          <div className="present-checkbox">
            <Checkbox
              onChange={(e) => setCheckPresent(e.target.checked)}
              checked={checkPresent}
            />
            <span>Present</span>
          </div>
        </div>
      </div>
    );
  };

  // Create fields based on the context provided
  const createFields = (context) => {
    switch (context) {
      case "education":
        return (
          <>
            <Form.Item
              label="Degree"
              name="degree"
              rules={educationValidator.degreeRules}
            >
              <Input placeholder="e.g. Bachelor in Computer Science" />
            </Form.Item>

            <Form.Item
              label="Institution"
              name="institution"
              rules={educationValidator.institutionRules}
            >
              <Input placeholder="e.g. University of Miami" />
            </Form.Item>

            {yearInputs()}

            <Form.Item
              label="GPA (min: 0, max: 4.0)"
              name="gpa"
              rules={educationValidator.gpaRules}
            >
              <InputNumber min={0} max={4} placeholder="e.g. 3.8" />
            </Form.Item>
          </>
        );

      case "work experience":
        return (
          <>
            <Form.Item
              label="Title"
              name="title"
              rules={workValidator.titleRules}
            >
              <Input placeholder="e.g. Web Developer" />
            </Form.Item>

            <Form.Item
              label="Company"
              name="company"
              rules={workValidator.companyRules}
            >
              <Input placeholder="e.g. Google" />
            </Form.Item>

            {yearInputs()}

            <Form.Item
              label="Description"
              name="description"
              rules={workValidator.descriptionRules}
            >
              <Input.TextArea
                rows={4}
                showCount
                maxLength={1000}
                placeholder="e.g. Developed web applications using React and Node.js"
              />
            </Form.Item>
          </>
        );

      case "project":
        return (
          <Form.Item label="Project" name="project">
            <Input placeholder="e.g. Portfolio website" />
          </Form.Item>
        );

      case "skill":
        return (
          <>
            <Form.Item
              label="Skill"
              name="skill"
              rules={skillValidator.skillRules}
            >
              <Input placeholder="e.g. JavaScript" />
            </Form.Item>

            <Form.Item
              label="Proficiency"
              name="proficiency"
              rules={skillValidator.rateRules}
            >
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
        initialValues={{
          ...data,
          // Leave endYear field empty if the Present checkbox is checked
          endYear: checkPresent ? null : data?.endYear,
        }}
        onFinish={onSubmit}
        requiredMark="optional"
      >
        <div className="inputs">{createFields(context)}</div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ display: "none" }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CardModal;
