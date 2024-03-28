function topThreeWords(text) {
  const cleanString = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase(),
    words = cleanString.match(/\S+/g) || [],
    frequencies = {};
  let word, frequency, i;

  for (i = 0; i < words.length; i++) {
    if (words[i].match(/^[\\']+$/)) {
      word = []
    }
    else {
      word = words[i];
      frequencies[word] = frequencies[word] || 0;
      frequencies[word]++;
    }
  }

  frequency = Object.keys(frequencies);

  return frequency.sort(function (a, b) { return frequencies[b] - frequencies[a]; }).slice(0, 3)
}

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`)); // ["a", "of", "on"]
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ["e", "ddd", "aa"]
console.log(topThreeWords(`//wont won't won't"`)); // ["won't", "wont"]
