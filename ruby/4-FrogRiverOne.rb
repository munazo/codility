# https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

def solution(x, a)
  fallen_leaves = {}
  a.each_with_index{|leaf, i|
    fallen_leaves[leaf] = true
    return i if fallen_leaves.length == x
  }
  -1
end

p solution(5,[1,3,1,4,2,3,5,4])
p solution(6,[1,3,1,4,2,3,5,4])
p solution(1,[1])
p solution(3,[1,2])