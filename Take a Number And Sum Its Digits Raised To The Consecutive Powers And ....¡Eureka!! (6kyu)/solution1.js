function sumDigPow(a, b) {
  var ans = [];
  while (a <= b) {
    if (a.toString().split('').reduce((x, y, i) => x + (+y) ** (i + 1), 0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}

console.log(sumDigPow(1, 100)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 89]
console.log(sumDigPow(1, 200)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 89, 135, 175]
console.log(sumDigPow(90, 100)); // []
