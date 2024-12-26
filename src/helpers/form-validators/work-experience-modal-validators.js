export const positionRules = [
  { required: true, message: "Position field is required" },
  { min: 2, message: "Position must be at least 2 characters" },
];

export const companyRules = [
  { required: true, message: "Company field is required" },
  { min: 2, message: "Company must be at least 2 characters" },
];
