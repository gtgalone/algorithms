const quickSort = (list) => {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[list.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const list = [1, 4, 2, 5, 7, 6, 3, 8, 9];
console.log(quickSort(list));
