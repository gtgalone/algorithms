const fibonacci = (value) => {
  const arr = [0, 1];

  const _fibonacci = (n) => {
    if (arr[n] !== undefined) {
      return arr[n];
    }

    arr[n] = _fibonacci(n - 1) + _fibonacci(n - 2);

    return arr[n];
  }

  const result = _fibonacci(value);
  return result;
}

console.log(fibonacci(7));
