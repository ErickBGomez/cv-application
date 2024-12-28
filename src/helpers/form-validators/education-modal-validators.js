export const degreeRules = [
  { required: true, message: "Degree field is required" },
  { min: 2, message: "Degree must be at least 2 characters" },
];

export const institutionRules = [
  { required: true, message: "Institution field is required" },
  { min: 2, message: "Institution must be at least 2 characters" },
];

export const gpaRules = [
  { type: "number", message: "GPA must be a number" },
  { min: 0, message: "GPA must be at least 0" },
  { max: 4, message: "GPA must be at most 4" },
];
