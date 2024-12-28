import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import ResumeSection from "../ResumeSection/ResumeSection";
import ContactInfo from "../ContactInfo/ContactInfo";
import SkillInfo from "../SkillInfo/SkillInfo";
import "./Resume.scss";
import ResumeEntry from "../ResumeEntry/ResumeEntry";

// Provisional data, remove later
const educationData = {
  degree: "Bachelor's degree in Computer Science",
  institution: "University of El Salvador",
  startYear: 2023,
  endYear: 2026,
  gpa: 3.8,
};

const workData = {
  title: "Web Developer",
  company: "Tech Company",
  startYear: 2027,
  endYear: 2029,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet ",
};

const Resume = ({ data }) => {
  const {
    fullname,
    workPosition,
    about,
    email,
    phoneNumber,
    location,
    skills,
  } = data;

  return (
    <div className="resume">
      <div className="resume-header">
        <div className="fullname">{fullname}</div>
        <div className="work-position">{workPosition}</div>
      </div>
      <aside className="resume-aside">
        {about && <ResumeSection title="About">{about}</ResumeSection>}
        <ResumeSection title="Contact" list>
          <ContactInfo icon={<MdEmail />} info={email} />
          <ContactInfo icon={<MdCall />} info={phoneNumber} />
          {location && <ContactInfo icon={<MdLocationOn />} info={location} />}
        </ResumeSection>
        {skills && (
          <ResumeSection title="Skills" list>
            {skills.map((s, i) => (
              <SkillInfo key={i} skill={s.skill} value={s.value} />
            ))}
          </ResumeSection>
        )}
      </aside>
      <div className="resume-main">
        <ResumeSection title="Education" list>
          <ResumeEntry context="education" data={educationData} />
          <ResumeEntry context="education" data={educationData} />
        </ResumeSection>
        <ResumeSection title="Work Experience" list>
          <ResumeEntry context="work" data={workData} />
          <ResumeEntry context="work" data={workData} />
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
