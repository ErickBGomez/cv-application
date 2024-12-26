export const educationValidator = [
  { required: true, message: "Education field is required" },
  { min: 2, message: "Education must be at least 2 characters" },
];

export const institutionValidator = [
  { required: true, message: "Institution field is required" },
  { min: 2, message: "Institution must be at least 2 characters" },
];
