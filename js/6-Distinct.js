// https://codility.com/programmers/lessons/6-sorting/distinct/

// Write a function
//
// function solution(A);
// that, given a zero-indexed array A consisting of N integers,
// returns the number of distinct values in array A.
//
// Assume that:
//
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// For example, given array A consisting of six elements such that:
//
//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in array A,
// namely 1, 2 and 3.

// ▼▼▼ 100% ▼▼▼
function solution(A) {
  let result = {};
  for (let i = 0, iLen = A.length; i < iLen; i += 1) {
    if (result.hasOwnProperty(A[i])) {
      continue;
    }
    result[A[i]] = true;
  }
  return Object.keys(result).length;
}

// ▼▼▼ 83% ▼▼▼
// function solution(A) {
//   return A.filter((item, index) => {
//     return index === A.indexOf(item);
//   }).length;
// }

console.log(solution([2, 1, 1, 2, 3, 1]));
