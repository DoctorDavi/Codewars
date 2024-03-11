function disemvowel(str) {
  let result = '';

  for (const letter of str) { // loops through str parameter
    switch (letter.toLowerCase()) { // checking with lowercase letter
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        break;
      default:
        result += letter; // result is added with new letter
    }
  }

  return result;
}

console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"
