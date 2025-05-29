const {countVowels} = require('../countVowels.js')

describe("countVowels function", () => {
    test("should count the number of vowels in a single word or phrase", () => {
        expect(countVowels('hello')).toBe(2);
        expect(countVowels('world')).toBe(1);
    });

    test("should return 4 for 'Carmen Rhodes'", () => {
        expect(countVowels("Carmen Rhodes")).toBe(4);
      });

    test("should return 0 for 'bcdfg'", () => {
        expect(countVowels("bcdfg")).toBe(0);
      });

      test("should return 0 for empty string", () => {
        expect(countVowels("")).toBe(0);
      });
    
      test("should return 0 if input is not a string", () => {
        expect(countVowels(123)).toBe(0);
      });
});