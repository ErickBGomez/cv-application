import { Form, Input } from "antd";
import { FaUser, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import FormSection from "../FormSection/FormSection";
import "./ResumeForm.scss";

const educationEntries = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    institution: "University of Miami",
    startYear: "2015",
    endYear: "2019",
  },
  {
    id: 2,
    title: "High School Diploma",
    institution: "Miami Senior High School",
    startYear: "2011",
    endYear: "2015",
  },
];

const ResumeForm = () => {
  return (
    <Form name="resume-form" className="resume-form" layout="vertical">
      <FormSection icon={<FaUser />} title="Personal Information">
        <Form.Item label="Full name" name="fullName" hasFeedback>
          <Input placeholder="e.g. John Doe" />
        </Form.Item>

        <Form.Item label="Work position" name="workPosition" hasFeedback>
          <Input placeholder="e.g. Web developer" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<FaPhoneAlt />} title="Contact">
        <Form.Item label="Email" name="email" hasFeedback>
          <Input placeholder="e.g. johndoe@domain.com" />
        </Form.Item>

        <Form.Item label="Phone number" name="phoneNumber" hasFeedback>
          <Input placeholder="e.g. 1234-5678" />
        </Form.Item>

        <Form.Item label="Location" name="location" hasFeedback>
          <Input placeholder="e.g. Miami, Florida, USA" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<FaGraduationCap />} title="Education"></FormSection>
    </Form>
  );
};

export default ResumeForm;
