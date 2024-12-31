import "./ResumeSection.scss";

const ResumeSection = ({ title, children, className, list }) => {
  return (
    <section className={`resume-section ${className}`}>
      <h2 className="title">{title}</h2>
      <div className={`content${list ? " list" : ""}`}>{children}</div>
    </section>
  );
};

export default ResumeSection;
