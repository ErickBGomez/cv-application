import { Rate } from "antd";
import "./SkillInfo.scss";
import PropTypes from "prop-types";

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

SkillInfo.propTypes = {
  skill: PropTypes.string,
  value: PropTypes.number,
};

export default SkillInfo;
