/* countVowels Function Green Phase
function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let wordsArray = str.split ("");
    let vowelCount = 0
    for (let char of wordsArray) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
return vowelCount
}

console.log(countVowels('abcdefg'));

module.exports = { countVowels }
*/

// countVowels Function refactored

function countVowels(str) {
    if (typeof str !== 'string') return 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
      .toLowerCase()
      .split('')
      .filter(char => vowels.includes(char))
      .length;
  }

// console.log(countVowels('abcdefg'));

module.exports = { countVowels }