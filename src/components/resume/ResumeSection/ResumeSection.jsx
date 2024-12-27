import "./ResumeSection.scss";

const ResumeSection = ({ title, children, list }) => {
  return (
    <section className="resume-section">
      <h2 className="title">{title}</h2>
      <div className={`content ${list ? "list" : ""}`}>{children}</div>
    </section>
  );
};

export default ResumeSection;
