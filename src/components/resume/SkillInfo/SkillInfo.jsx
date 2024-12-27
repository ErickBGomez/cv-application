import { Rate } from "antd";

const SkillInfo = ({ title, value }) => {
  return (
    <div className="skill-info">
      <div className="title">{title}</div>
      <div className="value">
        <Rate value={value} disabled />
      </div>
    </div>
  );
};

export default SkillInfo;
