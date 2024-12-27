import "./Resume.scss";

const Resume = ({ data }) => {
  const { fullname, workPosition } = data;

  return (
    <div className="resume">
      <div className="personal-info">
        <div className="fullname">{fullname}</div>
        <div className="work-position">{workPosition}</div>
      </div>
    </div>
  );
};

export default Resume;
