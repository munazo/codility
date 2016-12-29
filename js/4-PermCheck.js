// https://codility.com/programmers/lessons/4-counting_elements/perm_check/
//
// A non-empty zero-indexed array A consisting of N integers is given.
//
// A permutation is a sequence containing each element from 1 to N once, and only once.
//
// For example, array A such that:
//
//  A[0] = 4
//  A[1] = 1
//  A[2] = 3
//  A[3] = 2
// is a permutation, but array A such that:
//
//  A[0] = 4
//  A[1] = 1
//  A[2] = 3
// is not a permutation, because value 2 is missing.
//
// The goal is to check whether array A is a permutation.

function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0, iLen = A.length; i < iLen; i += 1) {
    if (A[i] !== parseInt(i, 10) + 1) {
      return 0;
    }
  }
  return 1;
}

console.log(solution([1, 2, 5, 4, 3]));
