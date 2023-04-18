const twoSum = require("./solution");
test("returns index of two numbers in nums that equal target value", () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1])
});