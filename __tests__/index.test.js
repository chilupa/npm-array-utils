import { emptyArray, removeDuplicates } from '../index';

describe('Array utilities', () => {
  it('should test remove duplicates', () => {
    const duplicates = [1, 1, 1, 2, 2];
    const uniqueArray = removeDuplicates(duplicates);
    expect(uniqueArray).toEqual([1, 2]);
  });

  it('should test empty array', () => {
    const array = ['a', 'b'];
    const result = emptyArray(array);
    expect(result).toEqual(0);
  });
});
