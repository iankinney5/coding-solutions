/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function getSpiralOrder(matrix) {

    // Define boundries
    let rowStart = 0,
        rowEnd = matrix.length -1,
        colStart = 0,
        colEnd = matrix[0].length -1,
        // empty array for result
        result = [];

    while(rowStart <= rowEnd && colStart <= colEnd) {

        // move right
        for(let i= colStart; i<= colEnd; i++){
            result.push(matrix[rowStart][i]);
        }
        // advance row pointer after moving right
        rowStart++;

        // move down
        for(let i=rowStart; i<= rowEnd; i++){
            result.push(matrix[i][colEnd]);
        }
        // reduce column pointer after moving down
        colEnd--;

        // move left
        if(rowStart <= rowEnd){
            for(let i=colEnd; i >= colStart; i--){
                result.push(matrix[rowEnd][i]);
            }
        }
        // reduce row pointer after moving left
        rowEnd--;

        // move up
        if(colStart <= colEnd){
            for(let i=rowEnd; i >= rowStart; i--){
                result.push(matrix[i][colStart]);
            }
        }
        // advance col pointer after moving up
        colStart++;
    }

    return result;

};

module.exports = getSpiralOrder;