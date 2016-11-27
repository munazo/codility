# https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

def solution(a)
  left   = a[0]
  right  = a[1..-1].inject(&:+)
  result = (left - right).abs
  
  (1..a.length - 1).each {|i|
    abs = (left - right).abs
    result = abs if abs < result
    
    left += a[i]
    right -= a[i]
  }
  result
end

p solution([3,1,2,4,3])
p solution([1,4])
p solution([1,4,5])