export const fullnameRules = [
  { required: true, message: "Full name is required" },
];

export const jobTitleRules = [
  { required: true, message: "Job title is required" },
];

export const aboutRules = [
  { max: 300, message: "About must be at most 300 characters" },
];

export const emailRules = [
  { required: true, message: "Email is required" },
  { type: "email", message: "Please enter a valid email" },
];

export const phoneNumberRules = [
  { required: true, message: "Phone number is required" },
  {
    pattern: /^[0-9]{4}-[0-9]{4}$/,
    message: "Phone number must be in the format 1234-5678",
  },
];

export const educationRules = [
  { required: true, message: "Education is required" },
];

export const workExperienceRules = [
  { required: true, message: "Work experience is required" },
];

export const skillsRules = [{ required: true, message: "Skills are required" }];
