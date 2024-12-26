export const fullnameValidator = [
  { required: true, message: "Full name is required" },
  { min: 3, message: "Full name must be at least 3 characters" },
];

export const workPositionValidator = [
  { required: true, message: "Work position is required" },
  { min: 3, message: "Work position must be at least 3 characters" },
];

export const emailValidator = [
  { required: true, message: "Email is required" },
  { type: "email", message: "Please enter a valid email" },
];

export const phoneNumberValidator = [
  { required: true, message: "Phone number is required" },
  {
    pattern: /^[0-9]{4}-[0-9]{4}$/,
    message: "Phone number must be in the format 1234-5678",
  },
];
