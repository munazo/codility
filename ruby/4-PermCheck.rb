# https://codility.com/programmers/lessons/4-counting_elements/perm_check/

def solution(a)
  a.sort!
  b = (1..a.length).to_a
  a == b ? 1 : 0
end

p solution([1,2,5,4,3])
