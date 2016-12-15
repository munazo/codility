// https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
  let fallenLeaves = {};
  let result = -1;

  for (let i = 0, iLen = A.length; i < iLen; i += 1) {
    fallenLeaves[A[i]] = true;

    if (Object.keys(fallenLeaves).length === X) {
      result = i;
      break;
    }
  }
  
  return result;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(6, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(1, [1]));
console.log(solution(3, [1, 2]));
