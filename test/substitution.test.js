// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe("substitution() tests written by student", () => {
    describe("substitution()", () => {
        it("should substitute letters and return the string with the given alphabet cipher", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        });
        it("should convert to lowercase and maintain spaces", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });
        it("special characters in the alphabet still convert", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        });
        it("special characters in the input are converted", () => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
        });
        it("alphabet should be a string of 26 characters", () => {
            const actual = substitution("thinkful", "xoyqmcgruks#waflnthdjpzib$ev");
            expect(actual).to.be.false;
        });
        it("alphabet should be a string of length 26", () => {
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        });
        it("alphabet should not repeat characters", () => {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false;
        });
    })
})