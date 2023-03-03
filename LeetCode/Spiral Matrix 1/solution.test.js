const getSpiralOrder = require("./solution");
test("Returns input matrix in spiral ordered array", () => {
   expect(getSpiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toStrictEqual([1,2,3,6,9,8,7,4,5])
});