export const educationValidator = [
  { required: true, message: "Education field is required" },
  { min: 2, message: "Education must be at least 2 characters" },
];

export const institutionValidator = [
  { required: true, message: "Institution field is required" },
  { min: 2, message: "Institution must be at least 2 characters" },
];

export const startYearValidator = [
  { required: true, message: "Start year is required" },
  {
    pattern: /^[0-9]{4}$/,
    message: "Start year must be a valid year (e.g., 2021)",
  },
];

export const endYearValidator = [
  { required: true, message: "End year is required" },
  {
    pattern: /^[0-9]{4}$/,
    message: "End year must be a valid year (e.g., 2021)",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("startYear") <= value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("End year must be greater than or equal to start year")
      );
    },
  }),
];
