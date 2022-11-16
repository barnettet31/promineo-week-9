const {describe, expect, it} = require("@jest/globals");
const {everyNthElement} = require("../src/utilities");
describe("everyNthElement", () => {
    it("should return every nth element", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = everyNthElement(array, 3);
        expect(result).toEqual([1, 4, 7]);
    });
    it('should return the first element if n is 1', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = everyNthElement(array, 1);
        expect(result).toEqual([1]);
    });
});