# https://codility.com/programmers/lessons/1-iterations/binary_gap/start/

def solution(n)
  base = n.to_s(2).gsub(/0+$/, "")
  candidates = base.split("1").select{|i| i!= "" }
  
  return 0 if candidates.length < 1
  
  candidates.map{ |candidate|
    candidate.length
  }.max  
end

p solution(529)
p solution(15)
p solution(2147483647)