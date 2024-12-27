import "./ContactInfo.scss";

const ContactInfo = ({ icon, info }) => {
  return (
    <div className="contact-info">
      <div className="icon">{icon}</div>
      <div className="info">{info}</div>
    </div>
  );
};

export default ContactInfo;
