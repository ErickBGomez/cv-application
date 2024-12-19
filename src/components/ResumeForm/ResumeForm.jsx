import { Form, Input } from "antd";
import { FaUser } from "react-icons/fa";
import FormSection from "../FormSection/FormSection";

const ResumeForm = () => {
  return (
    <Form>
      <FormSection icon={<FaUser />} title="Personal Information">
        <Form.Item label="Full Name" name="fullName" hasFeedback>
          <Input />
        </Form.Item>
      </FormSection>
    </Form>
  );
};

export default ResumeForm;
