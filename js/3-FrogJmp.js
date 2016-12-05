// https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/

const solution = (X, Y, D) => {
  const distance = Y - X;
  return Math.ceil(distance / D);
};

console.log(solution(1, 1, 1));
