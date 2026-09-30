function shortenText(text, maxWords) {
  const cleanText = text.trim();
  const words = cleanText.split(" ");

  if (words.length <= maxWords) {
    return cleanText;
  }

  const shortWords = words.slice(0, maxWords);
  const shortText = shortWords.join(" ");

  if (shortText.endsWith(".")) {
    return shortText + "..";
  }

  return shortText + "...";
}
