const merge = (leftArray, rightArray) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftElement = leftArray[leftIndex];
    const rightElement = rightArray[rightIndex];

    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
  }

  return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

const mergeSort = (list) => {
  if (list.length <= 1) {
    return list;
  }

  const midIndex = Math.floor(list.length / 2);

  return merge(
    mergeSort(list.slice(0, midIndex)),
    mergeSort(list.slice(midIndex)),
  );
}

const list = [1, 4, 3, 2, 5, 7, 6, 3, 8, 9];
console.log(mergeSort(list));
