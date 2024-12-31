export const skillRules = [
  { required: true, message: "Skills field is required" },
];

export const rateRules = [
  { required: true, message: "Rate is required" },
  () => ({
    validator(_, value) {
      if (value >= 1 && value <= 5) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Rate must be between 1 and 5"));
    },
  }),
];
