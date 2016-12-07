// https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

const solution = (A) => {
  const expected = (((A.length + 1) * (A.length + 2)) / 2);
  const actual = A.reduce((prev, current) => prev + current, 0);

  return expected - actual;
};

console.log(solution([2, 3, 1, 5]));
console.log(solution([]));
console.log(solution([1]));
