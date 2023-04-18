const romanToInt = require("./solution");
test("Returns integer from roman numeral string", () => {
    expect(romanToInt("LVIII")).toStrictEqual(58);
});