// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = 
    [
      ['a', 'f', 'l', 'q', 'v'],
      ['b', 'g', 'm', 'r', 'w'],
      ['c', 'h', 'n', 's', 'x'],
      ['d', '(i/j)', 'o', 't', 'y'],
      ['e', 'k', 'p', 'u', 'z'],
    ];
  const polybiusDictionary = {
    'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51,
    'f': 12, 'g': 22, 'h': 32, 'i': 42, 'j': 42, 'k': 52,
    'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53,
    'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54,
    'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55,
  }

  function polybius(input, encode = true) {
    // require even input length for decode
    if (encode == false & input.split(' ').join('').length % 2 != 0) return false;

    // readable message array
    // replace (i/j) with i
    let message;
	if (encode) {
		message = input.toLowerCase();
		while (message.includes('(i/j)')) {
			message = message.replace('(i/j)', 'i');
		}
	} else {
		message = convertToMessage(input);
	}
	
	// begin cipher
    let finalString = [];
    for (let l in message) {
      let letter = message[l];
      if (encode) {
        // encode algorithm
        switch (letter) {
          case ' ':
            finalString.push(' ');
            break;
          default:
            finalString.push(polybiusDictionary[letter]);
        }
      } else {
        // decode algorithm
        switch (letter) {
          case ' ':
            finalString.push(' ');
            break;
          default:
            finalString.push(polybiusSquare[parseInt(letter[0] - 1)][parseInt(letter[1] - 1)]);
        }
      }
    }
    return finalString.join('');
  }

  // returns an array of numbers and / or spaces
  function convertToMessage(input) {
    let messageArray = []
    let offset = false;

    for (let i = 0; i < input.length; offset ? i++ : i += 2) {
      const character = input[i];
      // add spaces
      if (character == " ") {
        // spaces will offset the string by 1
        offset = true;
        messageArray.push(character);
      }
      else {
        // add coordinates
        offset = false;
        messageArray.push(input.substring(i, i + 2))
      }
    }

    return messageArray;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
