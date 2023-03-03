const generateMatrix = require("./solution");
test("Generates a matrix given a number representing n * n", () => {
    expect(generateMatrix(3)).toStrictEqual([[1,2,3],[8,9,4],[7,6,5]])
});