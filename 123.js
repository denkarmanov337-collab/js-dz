function minMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (const number of numbers) {
    if (number < min) {
      min = number;
    }

    if (number > max) {
      max = number;
    }
  }

  return [min, max];
}