# https://codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

def solution(s, p, q)
  factors = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  }

  p.count.times.map {|i|
    s.slice(p[i]..q[i]).split('').uniq.map{|v| factors[v.to_sym] }.min
  }
end

p solution('C', [0], [0])
