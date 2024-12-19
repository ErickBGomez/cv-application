import { Form, Input } from "antd";
import FormSection from "../FormSection/FormSection";

const ResumeForm = () => {
  return (
    <Form>
      <FormSection icon="👤" title="Personal Information">
        <Form.Item label="Full Name" name="fullName" hasFeedback>
          <Input />
        </Form.Item>
      </FormSection>
    </Form>
  );
};

export default ResumeForm;
