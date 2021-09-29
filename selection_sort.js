const swap = (list, index1, index2) => {
  const oldValue = list[index1];
  list[index1] = list[index2];
  list[index2] = oldValue;
}

const selectionSort = (list) => {

  for (let i = 0; i < list.length; i++) {
    let minIndex = i;
    for (let j = (i + 1); j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(list, i, minIndex);
    }
  }

  return list;
}

const list = [1, 4, 3, 2, 5, 7, 6, 3, 8, 9];
console.log(selectionSort(list));
