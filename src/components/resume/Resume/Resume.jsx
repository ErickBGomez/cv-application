import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import ResumeSection from "../ResumeSection/ResumeSection";
import ContactInfo from "../ContactInfo/ContactInfo";
import SkillInfo from "../SkillInfo/SkillInfo";
import "./Resume.scss";
import ResumeEntry from "../ResumeEntry/ResumeEntry";

const Resume = ({ data }) => {
  const {
    fullname,
    workPosition,
    about,
    email,
    phoneNumber,
    location,
    education,
    workExperience,
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
          {education.map((e, i) => (
            <ResumeEntry key={i} context="education" data={e} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work Experience" list>
          {workExperience.map((w, i) => (
            <ResumeEntry key={i} context="work" data={w} />
          ))}
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
