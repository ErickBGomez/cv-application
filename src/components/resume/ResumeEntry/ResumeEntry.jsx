import "./ResumeEntry.scss";

const ResumeEntry = ({ context, data = {} }) => {
  // Set parsedData based on context (education or work experience)
  const commonData = {
    startYear: data.startYear,
    endYear: data.endYear,
  };

  const parsedData =
    context === "education"
      ? {
          ...commonData,
          title: data.degree,
          subtitle: data.institution,
          description: data.gpa.toFixed(1),
        }
      : {
          ...commonData,
          title: data.title,
          subtitle: data.company,
          description: data.description,
        };

  return (
    <div className="resume-entry">
      <div className="title">{parsedData.title}</div>
      <div className="subtitle">{parsedData.subtitle}</div>
      <div className="years">
        {parsedData.startYear} - {parsedData.endYear}
      </div>
      {parsedData.description && (
        <div className="description">
          {context === "education" ? (
            <div>
              <span className="gpa">GPA:</span> {parsedData.description} / 4.0
            </div>
          ) : (
            parsedData.description
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeEntry;
