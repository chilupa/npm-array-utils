export const removeDuplicates = (array) => [...new Set(array)];

export const generateAlphaNumericString = () =>
  Math.random().toString(36).slice(2);

export const emptyArray = (array) => (array.length = 0);
