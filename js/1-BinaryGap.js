// https://codility.com/programmers/lessons/1-iterations/binary_gap/start/

const solution = (N) => {
  let twoDig = parseInt(N, 10).toString(2);
  let result = 0;

  twoDig = twoDig.replace(/0+$/, '');

  const candidates = twoDig.split('1').filter((n) => {
    if (result < n.length) {
      result = n.length;
    }

    return n;
  });

  if (candidates.length < 1) {
    return 0;
  }

  return result;
};

const s = solution(15);
console.log(s);
