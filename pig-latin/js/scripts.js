var pigLatin = function(wordOne) {
  if (wordOne[0] === "a" || wordOne[0] === "e" || wordOne[0] === "i" || wordOne[0] === "o" || wordOne[0] === "u") {
    return wordOne.concat("ay");
  }
  else {
    var newWordOne = wordOne.slice(1) + wordOne.slice(0, 1);
    return newWordOne.concat("ay");
  }
};
