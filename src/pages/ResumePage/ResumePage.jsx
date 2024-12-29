import { useContext } from "react";
import { Button } from "antd";
import { EditOutlined, PlusOutlined, PrinterOutlined } from "@ant-design/icons";
import Resume from "../../components/resume/Resume/Resume";
import ResumeDataContext from "../../context/ResumeDataContext";
import "./ResumePage.scss";
import { useNavigate } from "react-router";
import NoData from "../errors/NoData/NoData";

const ResumePage = () => {
  const { data } = useContext(ResumeDataContext);
  const navigate = useNavigate();

  return (
    <div className="resume-page">
      {data ? (
        <>
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
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default ResumePage;
