import "./ResumeSection.scss";

const ResumeSection = ({ title, children }) => {
  return (
    <section className="resume-section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export default ResumeSection;
