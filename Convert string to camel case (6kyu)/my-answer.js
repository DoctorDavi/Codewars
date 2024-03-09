function toCamelCase(str) {
  const chars = str.split(''); // turns string into array of characters

  return chars.map(function (char, i) {
    if (char == '-' || char == '_') {
      char = chars[i + 1].toUpperCase(); // makes item after the found symbol to uppercase
      chars.splice(i, 1); // removes the found symbol
    }

    return char;
  }).join(''); // turns array of characters into string 
}

console.log(toCamelCase("the-stealth-warrior")) // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")) // "TheStealthWarrior"
