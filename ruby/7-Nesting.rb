# https://codility.com/programmers/lessons/7-stacks_and_queues/nesting/

def solution(s)
  arr = s.split("")
  check = 0

  arr.each {|_s|
    if _s == "("
      check = check + 1
    else
      check = check - 1
    end

    return 0 if check < 0
  }
  check == 0 ? 1 : 0
end

p solution("()")
p solution("(()(())())")
p solution("()()()()()()()")

p solution(")(")

p solution("(()(())()")
p solution("())")
