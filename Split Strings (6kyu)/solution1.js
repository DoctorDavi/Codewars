function solution(str) {
  var arr = str.split('')
  var res = []

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) res.push(arr[i] + arr[i + 1])
    else res.push(arr[i] + '_')
  }

  return res
}

console.log(solution('abc')) // ['ab', 'c_']
console.log(solution('abcdef')) // ['ab', 'cd', 'ef']
