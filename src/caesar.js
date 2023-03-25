// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphaDict = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 ,k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25 };
  const alphaList = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift == 0 || shift == null || shift >= 26 || shift <= -26) {
      return false;
    }

    const shiftBy = encode ? shift : shift * -1; // shift reverses for decodes
    const characters = input.toLowerCase().split('');
    const finalString = [];
    for (let c in characters) {
      let letter = characters[c];
      // if letter is in dictionary
      // then shift and add to final array
      // otherwise skip shift and add to final array
      if (alphaList.includes(letter)) {
        let charCode = alphaDict[letter];
        charCode += shiftBy;
        if (charCode >= 0) {
          charCode = charCode % 26;
        } else {
          charCode = charCode + 26;
        }
        finalString.push(alphaList[charCode])
      } else {
        finalString.push(letter);
      }
    }
    return finalString.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
