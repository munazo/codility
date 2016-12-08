// https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

const solution = (A) => {
  let left = A[0];
  let right = A.slice(1).reduce((prev, current) => prev + current, 0);
  let result = Math.abs(left - right);

  for (let i = 1, iLen = A.length; i < iLen; i += 1) {
    let abs = Math.abs(left - right);

    if (abs < result) {
      result = abs;
    }

    left += A[i];
    right -= A[i];
  }
  return result;
};

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([1, 4]));
console.log(solution([1, 4, 5]));
