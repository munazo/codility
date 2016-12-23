# https://codility.com/programmers/lessons/8-leader/dominator/

def solution(a)
  return -1 if a.count < 1
  result = {}

  a.each {|_a|
    result[_a] ||= 0
    result[_a] += 1
  }
  max = result.max{|k,v|k[1] <=> v[1]}
  if (max.last / a.count.to_f > 0.5)
    a.find_index(max.first)
  else
    -1
  end
end

p solution([3,4,3,2,3,-1,3,3])
p solution([])
p solution([3])
p solution([3,1])
p solution([3,1,3])
p solution([3,1,3,1])
