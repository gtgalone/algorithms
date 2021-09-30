const change = (value) => {
  let count = 0;

  const types = [500, 100, 50, 10];

  for (const v of types) {
    count += Math.floor(value / v);
    value %= v;
  }


  return count;
}

// console.log(change(1260));

const toOne = (base, value) => {
  let count = 0;

  while (true) {
    let target = (base / value) * value;
    count += (base - target);
    base = target;

    if (base < value) {
      break;
    }

    count++;

    base = Math.floor(base / value);
  }

  count += (base - 1);
  return count;
}

console.log(toOne(25, 3));
