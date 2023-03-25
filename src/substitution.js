// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphaList = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

  function substitution(input, alphabet = '', encode = true) {
    // lowercase input
    input = input.toLowerCase();

    // require 26 unique characters in the alphabet
    alphabet = alphabet.toLowerCase().split('');
    if (alphabet.filter((char, index) => alphabet.indexOf(char) === index).length != 26 || !alphabet.length) return false;

    // choose dictionary based on encode / decode
    let cipher;
    encode ? cipher = alphaList : cipher = alphabet;

    // substitue characters according to cipher
    let finalString = [];
    for (let char in input) {
      let character = input[char];
      let index = cipher.indexOf(character);
      switch (character) {
        case ' ':
          finalString.push(' ');
          break;
        default:
          encode ? finalString.push(alphabet[index]) : finalString.push(alphaList[index]);
      }
    };

    return finalString.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
