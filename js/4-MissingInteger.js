//# https://codility.com/programmers/lessons/4-counting_elements/missing_integer/
//
//def solution(a)
//  ((1..a.length+1).to_a - a.sort.uniq).first
//end

function solution(A) {
  let left = [...Array(A.length + 2).keys()];
  left.shift();
  
  let right = A.sort().filter((elm, i, arr) => { return arr.indexOf(elm) === i });

  let result = [];
  
  for (let i = 0, iLen = left.length; i < iLen; i ++) {
    let include = true;
    for (let j = 0, jLen = right.length; j < jLen; j ++) {
      include = left[i] === right[j];
      include && result.push(left[i]);
    }
    
    
  }
  
  return result;

//  return 
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1]));
console.log(solution([]));
console.log(solution([1, 3]));
console.log(solution([1, 2]));