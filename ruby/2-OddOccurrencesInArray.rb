# https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

def solution(a)
  group = {}
  a.each{|i|
    group[i] ||= 0
    group[i] = group[i] + 1
  }
  
  group.select{|k,v| v % 2 != 0 }.keys.first
end

p solution([9,3,9,3,9,7,9])