import { Rate } from "antd";
import "./SkillInfo.scss";

const SkillInfo = ({ skill, value }) => {
  return (
    <div className="skill-info">
      <div className="skill">{skill}</div>
      <div className="value">
        <Rate value={value} disabled />
      </div>
    </div>
  );
};

export default SkillInfo;
