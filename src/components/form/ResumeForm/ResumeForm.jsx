import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, App } from "antd";
import {
  MdPerson,
  MdCall,
  MdSchool,
  MdBusinessCenter,
  MdStar,
} from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router";
import FormSection from "../FormSection/FormSection";
import DragCardsInput from "../../inputs/DragCardsInput/DragCardsInput";
import ResumeDataContext from "../../../context/ResumeDataContext";
import * as validator from "../../../helpers/form-validators/resume-form-validators";
import { capitalize } from "../../../helpers/strings";
import "./ResumeForm.scss";

const ResumeForm = ({ data }) => {
  const { saveData } = useContext(ResumeDataContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const mode = searchParams.get("edit") ? "edit" : "create";
  const modePast = mode === "edit" ? "edited" : "created";

  // Set initial value when first loading the component (specially reloading)
  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const handleSubmit = (values) => {
    saveData(values);
    message.success(`Resume ${modePast} successfully`);
    navigate("/result");
  };

  const handleFailedSubmit = () => {
    message.error("Please fill all the required fields");
  };

  return (
    <Form
      form={form}
      name="resume-form"
      className="resume-form"
      layout="vertical"
      onFinish={handleSubmit}
      onFinishFailed={handleFailedSubmit}
      requiredMark="optional"
      initialValues={{ ...data }}
    >
      <FormSection icon={<MdPerson />} title="Personal Information">
        <Form.Item
          label="Full name"
          name="fullname"
          rules={validator.fullnameRules}
        >
          <Input placeholder="e.g. John Doe" />
        </Form.Item>

        <Form.Item
          label="Job title"
          name="jobTitle"
          rules={validator.jobTitleRules}
        >
          <Input placeholder="e.g. Web developer" />
        </Form.Item>

        <Form.Item label="About" name="about" rules={validator.aboutRules}>
          <Input.TextArea
            rows={4}
            showCount
            maxLength={300}
            placeholder="e.g. Currently working as a web developer at Tech Company"
          />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdCall />} title="Contact">
        <Form.Item label="Email" name="email" rules={validator.emailRules}>
          <Input placeholder="e.g. johndoe@domain.com" />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={validator.phoneNumberRules}
        >
          <Input placeholder="e.g. 1234-5678" />
        </Form.Item>

        <Form.Item label="Location" name="location">
          <Input placeholder="e.g. Miami, Florida, USA" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdSchool />} title="Education">
        <Form.Item
          name="education"
          rules={validator.educationRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput context="education" initialValue={data?.education} />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdBusinessCenter />} title="Work experience">
        <Form.Item
          name="workExperience"
          rules={validator.workExperienceRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput
            context="work experience"
            initialValue={data?.workExperience}
          />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdStar />} title="Skills">
        <Form.Item
          name="skills"
          rules={validator.skillsRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput context="skill" initialValue={data?.skills} />
        </Form.Item>
      </FormSection>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          {capitalize(mode)} resume
        </Button>
      </Form.Item>
    </Form>
  );
};

ResumeForm.propTypes = {
  data: PropTypes.object,
};

export default ResumeForm;
