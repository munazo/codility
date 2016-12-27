# https://codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

# The figure below shows discs drawn for N = 6 and A as follows:
# 
# A[0] = 1
# A[1] = 5
# A[2] = 2
# A[3] = 1
# A[4] = 4
# A[5] = 0
# 
# There are eleven (unordered) pairs of discs that intersect, namely:
#   discs 1 and 4 intersect, and both intersect with all the other discs;
#   disc 2 also intersects with discs 0 and 3.

def solution(a)
  ranges = a.each_with_index.map {|value, index|
    (index - value)..(index + value)
  }
  
  ranges.map.with_index {|range, index|
    ranges.slice(index+1..-1).map{|r| 
      r.first <= range.last && range.first <= r.last ? true : nil
    }
  }.flatten.reject{|a| a != true}.count
end

p solution([1,5,2,1,4,0])

