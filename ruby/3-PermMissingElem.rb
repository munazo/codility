# https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

def solution(a)
  expected_sum = ((a.length+1)*(a.length+2)/2)
  actual_sum = a.inject(0){|r,i|r+=i}
  expected_sum - actual_sum
end

p solution([2,3,1,5])