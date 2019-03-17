numbers = [1, 5, 7, 3, 4, 2, 6]

def bubble_sort(arr):
  for i, v in enumerate(arr):
    end = 1
    if (i + 1 > len(arr)):
      break
    x = v
    y = arr[i+1]
    print(i, v)

if __name__ == "__main__":
  bubble_sort(numbers)
