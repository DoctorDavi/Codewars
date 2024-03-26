function sumPairs(ints, s) {
  const intsSet = new Set();

  for (let i = 0; i < ints.length; i++) {
    let currInt = ints[i];
    if (intsSet.has(s - currInt)) return [s - currInt, currInt];
    else intsSet.add(currInt);
  }
}

console.log(sumPairs([11, 3, 7, 5], 10)) // [3, 7]
console.log(sumPairs([4, 3, 2, 3, 4], 6)) // [4, 2]
console.log(sumPairs([0, 0, -2, 3], 2)) // undefined
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) // [3, 7]
