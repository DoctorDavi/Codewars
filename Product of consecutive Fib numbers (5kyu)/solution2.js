function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

console.log(productFib(714)) // (21, 34, true) || [21, 34, true] || {21, 34, 1} || {21, 34, true}
console.log(productFib(800)) // (34, 55, false) || [34, 55, false] || {34, 55, 0} || {34, 55, false}
