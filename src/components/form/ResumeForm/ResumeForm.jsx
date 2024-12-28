import { Button, Form, Input } from "antd";
import { FaUser, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter, MdStar } from "react-icons/md";
import FormSection from "../FormSection/FormSection";
import "./ResumeForm.scss";
import DragCardsInput from "../../inputs/DragCardsInput/DragCardsInput";
import * as validator from "../../../helpers/form-validators/resume-form-validators";

/* 
  TODOs:
  2. Fix icon positioning
*/
const ResumeForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      name="resume-form"
      className="resume-form"
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark="optional"
    >
      <FormSection icon={<FaUser />} title="Personal Information">
        <Form.Item
          label="Full name"
          name="fullName"
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
            maxLength={150}
            placeholder="e.g. Currently working as a web developer at Tech Company"
          />
        </Form.Item>
      </FormSection>

      <FormSection icon={<FaPhoneAlt />} title="Contact">
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

      <FormSection icon={<FaGraduationCap />} title="Education">
        <Form.Item
          name="education"
          rules={validator.educationRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput context="education" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdBusinessCenter />} title="Work experience">
        <Form.Item
          name="workExperience"
          rules={validator.workExperienceRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput context="work experience" />
        </Form.Item>
      </FormSection>

      {/* Skill delete not working */}
      <FormSection icon={<MdStar />} title="Skills">
        <Form.Item
          name="skills"
          rules={validator.skillsRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput context="skill" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdStar />} title="Skills">
        <Form.Item
          name="skills"
          rules={validator.skillsRules}
          validateTrigger="onSubmit"
        >
          <DragCardsInput context="project" />
        </Form.Item>
      </FormSection>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;
