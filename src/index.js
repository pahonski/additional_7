module.exports = function solveSudoku(matrix) {
  // your solution
    let testArray = [1,2,3,4,5,6,7,8,9];
    let array = [];
    let squareRow, squareColumn;
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (matrix[row][column] === 0) {
                squareRow = Math.floor(row / 3) * 3;
                squareColumn = Math.floor(column / 3) * 3;
                for (let i = 0; i < 9; i++) {
                    let rowIndex = squareRow + i % 3;
                    let colIndex = squareColumn + Math.floor(i / 3);
                    array.push(matrix[row][i]);
                    array.push(matrix[i][column]);
                    array.push(matrix[rowIndex][colIndex]);
                }
                testArray = testArray.filter(function (item) {
                    return array.indexOf(item) == -1;
                });
                for (let i = 0; i < testArray.length; i++) {
                    matrix[row][column] = testArray[i];
                    let testMatrix = solveSudoku(matrix);
                    if (testMatrix != false) {
                        return testMatrix
                    }
                }
                matrix[row][column] = 0;
                return false
            }
        }
    }
    return matrix;
};
