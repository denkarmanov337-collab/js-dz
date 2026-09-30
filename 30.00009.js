function swapParts(text) {
  const parts = text.split(" ");
  const firstPart = parts[0];
  const secondPart = parts[1];

  return secondPart + " " + firstPart;
}
