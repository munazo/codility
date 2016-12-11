# https://codility.com/programmers/lessons/5-prefix_sums/count_div/

def solution(a, b, k)
  b / k.floor - (a - 1) / k.floor
end

p solution(6, 11, 2)
