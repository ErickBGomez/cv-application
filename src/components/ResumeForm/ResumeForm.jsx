import { Form, Input } from "antd";
import { FaUser } from "react-icons/fa";
import FormSection from "../FormSection/FormSection";

const ResumeForm = () => {
  return (
    <Form name="resume-form" layout="vertical">
      <FormSection icon={<FaUser />} title="Personal Information">
        <Form.Item label="Full name" name="fullName" hasFeedback>
          <Input />
        </Form.Item>
      </FormSection>
    </Form>
  );
};

export default ResumeForm;
