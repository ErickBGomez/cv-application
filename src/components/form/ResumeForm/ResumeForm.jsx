import { Button, Form, Input } from "antd";
import { FaUser, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter, MdStar } from "react-icons/md";
import FormSection from "../FormSection/FormSection";
import "./ResumeForm.scss";
import DragCardsInput from "../../inputs/DragCardsInput/DragCardsInput";
import { useState } from "react";

// const initialEducationEntries = [
//   {
//     id: 1,
//     title: "Bachelor of Science in Computer Science",
//     description: "University of Miami",
//     startYear: "2015",
//     endYear: "2019",
//   },
//   {
//     id: 2,
//     title: "High School Diploma",
//     description: "Miami Senior High School",
//     startYear: "2011",
//     endYear: "2015",
//   },
// ];

// const initialWorkEntries = [
//   {
//     id: 1,
//     title: "Web Developer",
//     description: "Google",
//     startYear: "2019",
//     endYear: "Present",
//   },
//   {
//     id: 2,
//     title: "Intern",
//     description: "Facebook",
//     startYear: "2018",
//     endYear: "2019",
//   },
// ];

// const initialSkillEntries = [
//   {
//     id: 1,
//     title: "JavaScript",
//     description: 1,
//   },
//   {
//     id: 2,
//     title: "React",
//     description: 2,
//   },
//   {
//     id: 3,
//     title: "Python",
//     description: 3,
//   },
// ];

const ResumeForm = () => {
  // const [educationEntries, setEducationEntries] = useState(
  //   initialEducationEntries
  // );
  // const [workEntries, setWorkEntries] = useState(initialWorkEntries);
  // const [skillEntries, setSkillEntries] = useState(initialSkillEntries);

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
        <Form.Item label="Full name" name="fullName">
          <Input placeholder="e.g. John Doe" />
        </Form.Item>

        <Form.Item label="Work position" name="workPosition">
          <Input placeholder="e.g. Web developer" />
        </Form.Item>
      </FormSection>

      <FormSection icon={<FaPhoneAlt />} title="Contact">
        <Form.Item label="Email" name="email">
          <Input placeholder="e.g. johndoe@domain.com" />
        </Form.Item>

        <Form.Item label="Phone number" name="phoneNumber">
          <Input placeholder="e.g. 1234-5678" />
        </Form.Item>

        <Form.Item label="Location" name="location">
          <Input placeholder="e.g. Miami, Florida, USA" />
        </Form.Item>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;
