const { expect } = require('chai');
const { polybius } = require('../src/polybius')

// Write your tests here!
describe("polybius tests written by student", () => {
    describe("polybius()", () => {
        it("should encode into string of numbers", () => {
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it("should decode numbers into characters when encode param is false", () => {
            const actual = polybius("4432423352125413", false);
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
        it("should have an even number of alphanumeric characters when decoding", () => {
            const actual = polybius("3251 131343", false);
            const expected = "he llo";
            expect(actual).to.equal(expected);
        });
        it("spaces should be maintained throughout", () => {
            const actual = polybius("3251131343 2543241341", false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
        it("capital letters can be ignored", () => {
            const actual = polybius("WoRlD");
            const expected = "2543241341";
            expect(actual).to.equal(expected);
        });
        it("letters 'I' and 'J' should encode to 42", () => {
            const actual = [ polybius("thinkful"), polybius("AJAX") ]
            const expected = [ "4432423352125413", "11421135"];
            expect(actual).to.eql(expected);
        });
        it("42 should decode to (i/j)", () => {
            const actual = polybius("4432423352125413", false);
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
        it("(i/j) should encode to 42", () => {
            const actual = polybius("th(i/j)nkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        })
        it("should return false for decoding odd length of alphanumeric characters", () => {
            const actual = polybius("3251 13143", false);
            expect(actual).to.be.false;
        });
    })
})