// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe("caesar() tests written by student:", () => {
    describe("caesar(input, shift, encode = true)", () => {
        it("should return encoded message shifted by positive input", () => {
            const actual = caesar("thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
        it("should return encoded message shifted by negative input", () => {
            const actual = caesar("thinkful", -3);
            const expected = "qefkhcri";
            expect(actual).to.equal(expected);
        });
        it("should return decoded message when encode param is false", () => {
            const actual = caesar("wklqnixo", 3, false);
            const expected = 'thinkful';
            expect(actual).to.equal(expected);
        });
        it("spaces should be maintained through encode", () => {
            const actual = caesar("This is a secret message!", 8);
            const expected = 'bpqa qa i amkzmb umaaiom!';
            expect(actual).to.equal(expected);
        });
        it("spaces should be maintained through decode", () => {
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = 'this is a secret message!';
            expect(actual).to.equal(expected);
        });
        it("should return false for missing shift value", () => {
            const actual = caesar("thinkful");
            expect(actual).to.be.false;
        });
        it("should return false if shift value is equal to 0", () => {
            const actual = caesar("thinkful", 0);
            expect(actual).to.be.false;
        });
        it("should return false if shift value is greater than 25", () => {
            const actual = caesar("thinkful", 26);
            expect(actual).to.be.false;
        });
        it("should return false if shift value is less than -25", () => {
            const actual = caesar("thinkful", -26);
            expect(actual).to.be.false;
        });
        it("capital letters should be ignored", () => {
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = 'this is a secret message!';
            expect(actual).to.equal(expected);
        });
        it("should wrap letters that overflow past Z back to A", () => {
            const actual = caesar("z z z", 2);
            const expected = 'b b b';
            expect(actual).to.equal(expected);
        });
        it("should wrap letters that overflow past A back to Z", () => {
            const actual = caesar("b b b", 2, false);
            const expected = "z z z";
            expect(actual).to.equal(expected);
        })
    })
})