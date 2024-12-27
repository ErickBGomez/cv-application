import ResumeSection from "../ResumeSection/ResumeSection";
import "./Resume.scss";

const Resume = ({ data }) => {
  const { fullname, workPosition, about, email, phoneNumber, location } = data;

  return (
    <div className="resume">
      <div className="resume-header">
        <div className="fullname">{fullname}</div>
        <div className="work-position">{workPosition}</div>
      </div>
      <aside className="resume-aside">
        {about && <ResumeSection title="About">{about}</ResumeSection>}
        <ResumeSection title="Contact"></ResumeSection>
        <ResumeSection title="Skills"></ResumeSection>
      </aside>
      <div className="resume-main">
        <ResumeSection title="Education"></ResumeSection>
        <ResumeSection title="Work Experience"></ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
