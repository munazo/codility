// https://codility.com/programmers/lessons/4-counting_elements/max_counters/
//
// You are given N counters, initially set to 0, and you have two possible operations on them:
//
// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:
//
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:
//
//  A[0] = 3
//  A[1] = 4
//  A[2] = 4
//  A[3] = 6
//  A[4] = 1
//  A[5] = 4
//  A[6] = 4
// the values of the counters after each consecutive operation will be:
//
//  (0, 0, 1, 0, 0)
//  (0, 0, 1, 1, 0)
//  (0, 0, 1, 2, 0)
//  (2, 2, 2, 2, 2)
//  (3, 2, 2, 2, 2)
//  (3, 2, 2, 3, 2)
//  (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// 100 / 40
//66%


function solution(N, A) {
  let result = new Array(N).fill(0);

  for (let i = 0, iLen = A.length; i < iLen; i += 1) {
    if (A[i] > N) {
      const max = Math.max(...result);
      result.fill(max);
    } else {
      result[A[i] - 1] += 1;
    }
  }
  return result;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(1, [1]));