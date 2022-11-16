
const {describe, expect, test} = require("@jest/globals")


 
const mySum = (a, b)=> a + b;

describe("mySum", () => {
    test("should return the sum of two numbers", () => {
        expect(mySum(1, 2)).toBe(3);
    });
});