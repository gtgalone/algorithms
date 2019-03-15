S = "abppplee" #mother string
D = {"able", "ale", "bale", "kangaroo", "apple"} #set of words

def longest_substring(_string, words):
  d = dict.fromkeys(words, 0)
  longest = ''
  for char in _string:
    for w, i in d.items():
      print(i)
      try:
        if char == w[i]:
          d[w] += 1
      except IndexError:
        continue
          
      if d[w] == len(w):
        longest = max(longest, w, key=len)
  return longest

if __name__ == "__main__":
  print(longest_substring(S, D))
