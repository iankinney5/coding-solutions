/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {

    // set x and y boundries
    var x1 = 0;
    var x2 = n - 1;
    var y1 = 0;
    var y2 = n - 1;
    var i = 0;

    // Create 2d array, _ omits the need for a parameter
    var res = Array(n).fill(0).map(_ => Array(n));

    while (x1 <= x2 && y1 <= y2) {
        // right
        for (var x = x1; x <= x2; x++) {
            res[y1][x] = ++i;
        }
        // down
        for (var y = y1 + 1; y <= y2; y++) {
            res[y][x2] = ++i;
        }
        // left
        for (var x = x2 - 1; x > x1; x--) {
            res[y2][x] = ++i;
        }
        // up
        for (var y = y2; y > y1; y--) {
            res[y][x1] = ++i;
        }
        // increment and decrement pointers
        x1++;
        x2--;
        y1++;
        y2--;
    }
    return res;
};

module.exports = generateMatrix;