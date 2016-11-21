# https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/

def solution(a, k)  
  return [] if a.length < 1

  (k % a.length).times {|i|
    a.unshift(a.pop)    
  }
  a
end

p solution([1,2,3], 4)
