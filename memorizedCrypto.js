const newArray = [0, 1];

const fibonacci = num =>
  newArray[num] !== undefined
    ? newArray[num]
    : (newArray[num] = fibonacci(num - 1) + fibonacci(num - 2));
