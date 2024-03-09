function toCamelCase(str) {
  str = str.split('');
  return str.map(function (el, i) {
    if (el == '-' || el == '_') {
      el = str[i + 1].toUpperCase();
      str.splice(i + 1, 1);
    }
    return el;
  }).join('');
}

console.log(toCamelCase("the-stealth-warrior")) // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")) // "TheStealthWarrior"

// source - https://github.com/a1essar/codewars/blob/master/5%20kyu.%20Convert%20string%20to%20camel%20case.md 
