function squareDigits(num){
  const stringNum = `${num}`
  
  let result = ''
  for (const letter of stringNum) {
    const calculation = (+letter) ** 2
    result += calculation
  }
  
  return +result
}

console.log(squareDigits(9119));
console.log(squareDigits(3212));
