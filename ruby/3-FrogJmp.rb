# https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/

def solution(x, y, d)
  distance = y - x
  (distance / d.to_f).ceil
end

p solution(1, 1, 1)

