import { Button, Form, Input } from "antd";
import { FaUser, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter, MdStar } from "react-icons/md";
import FormSection from "../FormSection/FormSection";
import "./ResumeForm.scss";
import DragCardsInput from "../../inputs/DragCardsInput/DragCardsInput";
import * as validator from "../../../helpers/form-validators/resume-form-validators";

/*
  TODOs:
  1. Add About in personal information
  2. Add social media (LinkedIn, GitHub, etc.) in contact
  3. Add GPA in education entries
  4. Add description in work experience (with bullet points)
  5. Add "Present" option in education and work experience end year
  6. Refactor label texts
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
          label="Work position"
          name="workPosition"
          rules={validator.workPositionRules}
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

        {/* TODO: Add social media: Button to appear a input to accept title and link.
        Then, in the result, determine the corresponding icon */}
      </FormSection>

      <FormSection icon={<FaGraduationCap />} title="Education">
        <Form.Item label={null} name="education">
          <DragCardsInput context="education" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdBusinessCenter />} title="Work experience">
        <Form.Item label={null} name="workExperience">
          <DragCardsInput context="work experience" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<MdStar />} title="Skills">
        <Form.Item label={null} name="skills">
          <DragCardsInput context="skill" />
        </Form.Item>
      </FormSection>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" className="submit-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;
