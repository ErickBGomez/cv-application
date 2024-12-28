const ResumeEntry = ({ context }) => {
  // Provisional data, remove later
  const data = {
    degree: "Bachelor's degree in Computer Science",
    institution: "University of El Salvador",
    startYear: 2023,
    endYear: 2026,
    gpa: 3.8,
  };

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
          description: data.gpa,
        }
      : {
          ...commonData,
          title: data.title,
          subtitle: data.company,
          description: data.description,
        };

  return (
    <div className="entry">
      <div className="title">{parsedData.title}</div>
      <div className="subtitle">{parsedData.subtitle}</div>
      <div className="years">
        {parsedData.startYear} - {parsedData.endYear}
      </div>
      {parsedData.description && (
        <div className="description">
          {context === "education"
            ? `GPA: ${parsedData.description} / 4.0`
            : parsedData.description}
        </div>
      )}
    </div>
  );
};

export default ResumeEntry;
