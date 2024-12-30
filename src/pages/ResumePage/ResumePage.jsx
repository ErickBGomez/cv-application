import { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { EditOutlined, PlusOutlined, PrinterOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Resume from "../../components/resume/Resume/Resume";
import ResumeDataContext from "../../context/ResumeDataContext";
import NoData from "../errors/NoData/NoData";
import "./ResumePage.scss";

const ResumePage = () => {
  const { data, removeData } = useContext(ResumeDataContext);
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const handleEdit = () => {
    navigate("/?edit=true");
  };

  const handleNewResume = () => {
    removeData();
    navigate("/");
  };

  const handlePromptNewResume = () => {
    modal.confirm({
      title: "New resume",
      content:
        "Are your sure you want to create a new resume? All existing data will be lost.",
      onOk: handleNewResume,
      centered: true,
    });
  };

  return (
    <div className="resume-page">
      {contextHolder}
      {/* <Modal
        title="Create new resume"
        open={modalOpen}
        onOk={handleNewResume}
        centered
        width={350}
        closable={false}
        onCancel={() => setModalOpen(false)}
      >
        <p>Are your sure you want to create a new resume?</p>
        <p>All existing data will be lost.</p>
      </Modal> */}
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
              onClick={handlePromptNewResume}
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
