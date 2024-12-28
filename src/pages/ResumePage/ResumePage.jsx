import { Button } from "antd";
import { MdEdit } from "react-icons/md";
import { EditOutlined, PlusOutlined, PrinterOutlined } from "@ant-design/icons";
import Resume from "../../components/resume/Resume/Resume";
import "./ResumePage.scss";

const data = {
  fullname: "Erick Gomez",
  jobTitle: "Web developer",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet ",
  email: "erickgomez@domain.com",
  phoneNumber: "+503 1234-5678",
  location: "San Salvador, El Salvador",
  education: [
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "University of El Salvador",
      startYear: 2023,
      endYear: 2026,
      gpa: 3.8,
    },
    {
      degree: "High School Diploma",
      institution: "Instituto Nacional de San Salvador",
      startYear: 2019,
      endYear: 2022,
      gpa: 4.0,
    },
  ],
  workExperience: [
    {
      title: "Web Developer",
      company: "Tech Company",
      startYear: 2027,
      endYear: "Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet ",
    },
    {
      title: "Intern",
      company: "Tech Company",
      startYear: 2026,
      endYear: 2027,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet ",
    },
  ],
  skills: [
    { skill: "React", proficiency: 5 },
    { skill: "NodeJS", proficiency: 3 },
    { skill: "Proofreading", proficiency: 1 },
  ],
};

const ResumePage = () => {
  return (
    <div className="resume-page">
      <section className="title-section">
        <h1 className="title">Your Resume</h1>
        <div className="subtitle">Visualize your fantastic resume here</div>
      </section>
      <section className="actions">
        <Button icon={<EditOutlined />}>Edit</Button>
        <Button icon={<PlusOutlined />} type="primary">
          New resume
        </Button>
        <Button icon={<PrinterOutlined />}>Print</Button>
      </section>
      <section className="form-section">
        <Resume data={data} />
      </section>
    </div>
  );
};

export default ResumePage;
