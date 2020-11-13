export const removeDuplicates = (array) => [...new Set(array)];

export const generateAlphaNumericString = () =>
  Math.random().toString(36).slice(2);
