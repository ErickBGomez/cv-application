import PropTypes from "prop-types";
import "./ContactInfo.scss";

const ContactInfo = ({ icon, info }) => {
  return (
    <div className="contact-info">
      <div className="icon">{icon}</div>
      <div className="info">{info}</div>
    </div>
  );
};

ContactInfo.propTypes = {
  icon: PropTypes.node,
  info: PropTypes.string,
};

export default ContactInfo;
