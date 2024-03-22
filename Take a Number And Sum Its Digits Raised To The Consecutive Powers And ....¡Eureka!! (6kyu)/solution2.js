function sumDigPow(a, b) {
  var resultArr = [];
  var tempString = [];
  var sum;
  
  for(var i = a; i < b; i++){
    sum = 0;
    tempString = ("" + i).split("");
    for(var j = 0; j < tempString.length; j++)
      sum += Math.pow(tempString[j], j+1);
    if(sum === i)
      resultArr.push(i);   
  }
  return resultArr;
}

console.log(sumDigPow(1, 100)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 89]
console.log(sumDigPow(1, 200)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 89, 135, 175]
console.log(sumDigPow(90, 100)); // []
