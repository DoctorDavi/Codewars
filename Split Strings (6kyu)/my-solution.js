function solution(str) {
  var arr = str.split('') // array of character strings
  
  var res = [] // result array

  for (let i = 0; i < arr.length; i += 2) { // loops through array to get odd characters
    if (arr[i + 1]) { // if character is even 
      res.push(arr[i] + arr[i + 1]) // pushes odd character with even character
    } else {
      res.push(arr[i] + '_') // pushes odd character with symbol '_'
    }
  }

  return res // returns result array
}

console.log(solution('abc')) // ['ab', 'c_']
console.log(solution('abcdef')) // ['ab', 'cd', 'ef']
