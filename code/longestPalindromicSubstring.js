/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(inputString) {
  // string => return the actual palindrom
  // 1 2 3 4 5 6 7 8 9
  // there can be palindromes that are 121 and 1111

  let result = inputString.charAt(0);
  // go from start to finish
  for (let i = 0; i < inputString.length; i += 0.5) {
    // at every index, look in front and behind, go until not a palindrome
    // console.log('checking with index', i);
    const currentPalindrome = checkForPalindrome(inputString, i);
    result = result.length < currentPalindrome.length ? currentPalindrome : result;
  }
  return result;
};
 
const checkForPalindrome = (inputString, centerIndex) => {
  // handle the even case later
  // most of this code can be reused, instead of 3 => 2 4, its 2.5 => 2 3
  // 2.5 +- 1 = 1.5 3.5

  // check the front and the back
  let palindromic = true;
  let charactersToCheck = 0;
  // lowerstart and higherstart are to be able to respond to 0.5 increments
  const checkingForEvenLength = centerIndex % 1 === 0.5;
  const lowerStart = checkingForEvenLength ? centerIndex - 0.5 : centerIndex;
  const higherStart = checkingForEvenLength ? centerIndex + 0.5 : centerIndex;
  let reachedBeginning = lowerStart - charactersToCheck < 0;
  let reachedEnd = higherStart + charactersToCheck === inputString.length;
  let result = '';
  while (palindromic && !reachedBeginning && !reachedEnd) {
    if (inputString.charAt(lowerStart - charactersToCheck) !== inputString.charAt(higherStart + charactersToCheck)) {
      // console.log('not palindromic');
      palindromic = false;
      charactersToCheck--;
    } else {
      // console.log('palindromic');
      reachedBeginning = lowerStart - charactersToCheck === 0;
      reachedEnd = higherStart + charactersToCheck === inputString.length;
      result = inputString.substring(lowerStart - charactersToCheck, higherStart + charactersToCheck + 1);
      charactersToCheck++;
    }
  };
  // console.log('found palindrome', result);
  return result;
};

// console.log('test "cbbd" should return "bb"', longestPalindrome("cbbd"));
// console.log('test "a" should return "a"', longestPalindrome("a"));
// console.log('test "bb" should return "bb"', longestPalindrome("bb"));