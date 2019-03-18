numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

def bubble_sort(arr):
  print("in: %s" % arr)
  cycle = len(arr) - 2
  while (cycle >= 0):
    for i, v in enumerate(arr):
      x = v
      y = arr[i + 1]
      if (x > y):
        arr[i] = y
        arr[i + 1] = x
      if (i == cycle):
        cycle = cycle - 1
        break
  
  return arr

if __name__ == "__main__":
  print("out: %s" % bubble_sort(numbers))
