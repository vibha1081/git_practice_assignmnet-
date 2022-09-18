function checkPalindrome(string) {

  let result = 'It is a palindrome';
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      result = 'It is not a palindrome';
    }
    console.log(result);
  }
}