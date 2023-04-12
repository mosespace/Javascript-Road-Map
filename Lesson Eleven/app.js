/* ------------------------Example of creating a transponse of a ---------------------*/

const A = [[6, 2, 4], [7, 0, 3], [8, 9, 1]];
const transposeA = [];

for (let row = 0; row < A.length; row++) {
  transposeA[row] = [];
  for (let col = 0; col < A[row].length; col++) {
    transposeA[row][col] = A[col][row];
  }
}

console.log(transposeA);
