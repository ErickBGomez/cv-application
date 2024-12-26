export const workExperienceValidator = [
  { required: true, message: "Work experience field is required" },
  { min: 2, message: "Work experience must be at least 2 characters" },
];

export const companyValidator = [
  { required: true, message: "Company field is required" },
  { min: 2, message: "Company must be at least 2 characters" },
];
