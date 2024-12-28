export const positionRules = [
  { required: true, message: "Position field is required" },
  { min: 2, message: "Position must be at least 2 characters" },
];

export const companyRules = [
  { required: true, message: "Company field is required" },
  { min: 2, message: "Company must be at least 2 characters" },
];

export const descriptionRules = [
  { min: 10, message: "Description must be at least 10 characters" },
  { max: 1000, message: "Description must be at most 1000 characters" },
];
