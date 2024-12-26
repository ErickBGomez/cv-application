export const skillsValidator = [
  { required: true, message: "Skills field is required" },
];

export const rateValidator = [
  { required: true, message: "Rate is required" },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (value >= 1 && value <= 5) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Rate must be between 1 and 5"));
    },
  }),
];
