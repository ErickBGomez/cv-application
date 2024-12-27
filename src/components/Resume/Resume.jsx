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
      </aside>
      <div className="resume-main"></div>
    </div>
  );
};

export default Resume;
