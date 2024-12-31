import PropTypes from "prop-types";
import "./ResumeSection.scss";

const ResumeSection = ({ title, children, className, list }) => {
  return (
    <section className={`resume-section ${className}`}>
      <h2 className="title">{title}</h2>
      <div className={`content${list ? " list" : ""}`}>{children}</div>
    </section>
  );
};

ResumeSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  list: PropTypes.bool,
};

export default ResumeSection;
