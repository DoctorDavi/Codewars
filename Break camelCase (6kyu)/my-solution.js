function solution(string) {
  let result = ''
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      result += ' ' + string[i]
    } else {
      result += string[i]
    }
  }

  return result
}

console.log(solution("camelCasing")) // "camel Casing"
console.log(solution("identifier")) // "identifier"
console.log(solution("")) // ""
