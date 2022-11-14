
const {describe, expect, test} = require("@jest/globals")
const {mySum} = require('../script.ts');

describe('sum thing', ()=>{
    test('adds 1 + 2 and gets 3 ', ()=>{
        expect(mySum(1,2)).toBe(3);
    })
})