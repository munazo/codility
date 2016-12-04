// https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

const solution = (A) => {
  const group = {};

  for (let i = 0, iLen = A.length; i < iLen; i += 1) {
    group[A[i]] = (group[A[i]] || 0) + 1;
  }

  Object.keys(group).filter(k => group[k] % 2 !== 0);

  const result = Object.keys(group).filter(k => group[k] % 2 !== 0)[0];

  return parseInt(result, 10);
};

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([1, 3, 3]));
