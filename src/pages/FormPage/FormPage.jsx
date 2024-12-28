import ResumeForm from "../../components/form/ResumeForm/ResumeForm";

const FormPage = () => {
  return (
    <div className="form-page">
      <section className="title-section">
        <h1 className="title">Resume Form</h1>
        <div className="subtitle">
          Start adding your information to create your resume
        </div>
      </section>
      <section className="form-section">
        <ResumeForm />
      </section>
    </div>
  );
};

export default FormPage;
