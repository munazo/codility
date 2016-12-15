# https://codility.com/programmers/lessons/4-counting_elements/max_counters/
# Test score 88%

def solution(n, a)
  counters = Array.new(n, 0)
  max = 0

  a.each {|v|
    if (n < v)
      counters.fill(max)
    else
      counters[v-1] ||= 0
      counters[v-1] += 1
      if max < counters[v-1]
        max = counters[v-1]
      end
    end
  }

  counters
end

p solution(5, [3,4,4,6,1,4,4])
