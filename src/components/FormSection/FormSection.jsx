const FormSection = ({ icon, title, children }) => {
  return (
    <div className="section">
      <div className="title-container">
        <div className="title-icon">{icon}</div>
        <div className="title">{title}</div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default FormSection;
