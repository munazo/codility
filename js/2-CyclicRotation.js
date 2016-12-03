// https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/

const solution = (A, K) => {
  if (A.length < 1) { return []; }

  for (let i = 0; i < K % A.length; i += 1) {
    A.unshift(A.pop());
  }

  return A;
};

console.log(solution([1, 2, 3], 4));
