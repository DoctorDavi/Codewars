function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}

console.log(productFib(714)) // (21, 34, true) || [21, 34, true] || {21, 34, 1} || {21, 34, true}
console.log(productFib(800)) // (34, 55, false) || [34, 55, false] || {34, 55, 0} || {34, 55, false}
