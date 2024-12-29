import { useContext } from "react";
import ResumeForm from "../../components/form/ResumeForm/ResumeForm";
import ResumeDataContext from "../../context/ResumeDataContext";
import "./FormPage.scss";

const FormPage = () => {
  const { data } = useContext(ResumeDataContext);

  return (
    <div className="form-page">
      <section className="title-section">
        <h1 className="title">Resume Form</h1>
        <div className="subtitle">
          Start adding your information to create your resume
        </div>
      </section>
      <section className="form-section">
        <ResumeForm data={data} />
      </section>
    </div>
  );
};

export default FormPage;
