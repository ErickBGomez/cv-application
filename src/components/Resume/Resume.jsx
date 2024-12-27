import "./Resume.scss";

const Resume = ({ data }) => {
  const { fullname, workPosition } = data;

  return (
    <div className="resume">
      <div className="resume-header">
        <div className="fullname">{fullname}</div>
        <div className="work-position">{workPosition}</div>
      </div>
      <aside className="resume-aside">
        <section className="about">
          <h2 className="title">About</h2>
        </section>
        <section className="contact">
          <h2 className="title">Contact</h2>
        </section>
        <section className="contact">
          <h2 className="title">Skills</h2>
        </section>
      </aside>
      <div className="resume-main">
        <section className="education">
          <h2 className="title">Education</h2>
        </section>
        <section className="work-experience">
          <h2 className="title">Work experience</h2>
        </section>
      </div>
    </div>
  );
};

export default Resume;
