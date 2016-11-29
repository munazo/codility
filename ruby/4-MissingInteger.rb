# https://codility.com/programmers/lessons/4-counting_elements/missing_integer/

def solution(a)
  ((1..a.length+1).to_a - a.sort.uniq).first
end

p solution([1,3,6,4,1,2])
p solution([1])
p solution([])
p solution([1,3])
p solution([1,2])