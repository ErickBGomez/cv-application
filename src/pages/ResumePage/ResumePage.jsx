import { useContext } from "react";
import { Button } from "antd";
import { EditOutlined, PlusOutlined, PrinterOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Resume from "../../components/resume/Resume/Resume";
import ResumeDataContext from "../../context/ResumeDataContext";
import NoData from "../errors/NoData/NoData";
import "./ResumePage.scss";

const ResumePage = () => {
  const { data, removeData } = useContext(ResumeDataContext);
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/");
  };

  const handleEdit = () => {
    goToForm();
  };

  const handleNewResume = () => {
    removeData();
    goToForm();
  };

  return (
    <div className="resume-page">
      {data ? (
        <>
          <section className="title-section">
            <h1 className="title">Your Resume</h1>
            <div className="subtitle">Visualize your fantastic resume here</div>
          </section>
          <section className="actions">
            <Button icon={<EditOutlined />} onClick={handleEdit}>
              Edit
            </Button>
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={handleNewResume}
            >
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
