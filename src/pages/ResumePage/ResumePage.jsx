import { useContext } from "react";
import { Button } from "antd";
import { EditOutlined, PlusOutlined, PrinterOutlined } from "@ant-design/icons";
import Resume from "../../components/resume/Resume/Resume";
import ResumeDataContext from "../../context/ResumeDataContext";
import "./ResumePage.scss";

const ResumePage = () => {
  const { data } = useContext(ResumeDataContext);

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
      <section className="resume-section">
        <Resume data={data} />
      </section>
    </div>
  );
};

export default ResumePage;
