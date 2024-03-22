function sumDigPow(a, b) {
  let result = []

  for (let i = a; i < b; i++) {
    let num = `${i}`
    // console.log(num);
    numArr = num.split('')
    // console.log(numArr);
    // console.log(result);
    for (let i = 0; i <= numArr.length; i++) {
      if (numArr[i] ** [i + 1] + numArr[i + 1] ** [i + 2] == num) {
        console.log(num);
        result.push(num)
      }
    }

  }

  return result
}

console.log(sumDigPow(1, 100)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 89]
console.log(sumDigPow(1, 200)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 89, 135, 175]
console.log(sumDigPow(90, 100)); // []
