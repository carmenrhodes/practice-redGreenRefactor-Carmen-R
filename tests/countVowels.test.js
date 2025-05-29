const {countVowels} = require('../countVowels.js')

describe("countVowels function", () => {
    test("should count the number of vowels in a single word or phrase", () => {
        expect(countVowels('hello')).toBe(2);
        expect(countVowels('world')).toBe(1);
        expect(countVowels('Carmen Rhodes')).toBe(4);
        expect(countVowels("")).toBe(0);
    });
});