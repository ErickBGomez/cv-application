import { Form, Input } from "antd";
import { FaUser, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import FormSection from "../FormSection/FormSection";
import "./ResumeForm.scss";
import DragCardsInput from "../../inputs/DragCardsInput/DragCardsInput";
import { useState } from "react";

const initialEducationEntries = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    institution: "University of Miami",
    years: {
      start: "2015",
      end: "2019",
    },
  },
  {
    id: 2,
    title: "High School Diploma",
    institution: "Miami Senior High School",
    years: {
      start: "2011",
      end: "2015",
    },
  },
];

const workEntries = [
  {
    id: 1,
    title: "Web Developer",
    institution: "Google",
    years: {
      start: "2019",
      end: "Present",
    },
  },
  {
    id: 2,
    title: "Intern",
    institution: "Facebook",
    years: {
      start: "2018",
      end: "2019",
    },
  },
];

const ResumeForm = () => {
  const [educationEntries, setEducationEntries] = useState(
    initialEducationEntries
  );

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

      <FormSection icon={<FaGraduationCap />} title="Education">
        <DragCardsInput
          entries={educationEntries}
          setEntries={setEducationEntries}
          context="education"
        />
      </FormSection>

      <FormSection icon={<MdBusinessCenter />} title="Work experience">
        <DragCardsInput entries={workEntries} context="work experience" />
      </FormSection>
    </Form>
  );
};

export default ResumeForm;
