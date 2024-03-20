function solution(number) {
  number = `${number}`

  if (number.length == 3) {
    number = '0' + number
  } else if (number.length == 2) {
    number = '00' + number
  } else if (number.length == 1) {
    number = '000' + number
  }

  if (number < 1 || number > 3999) {
    console.log("Can't be written in Roman numerals")
  }

  let result = ''

  switch (number[0]) {
    case '1':
      result += 'M'
      break;
    case '2':
      result += 'MM'
      break;
    case '3':
      result += 'MMM'
      break;
    default:
      result += ''
  }

  switch (number[1]) {
    case '1':
      result += 'C'
      break;
    case '2':
      result += 'CC'
      break;
    case '3':
      result += 'CCC'
      break;
    case '4':
      result += 'CD'
      break;
    case '5':
      result += 'D'
      break;
    case '6':
      result += 'DC'
      break;
    case '7':
      result += 'DCC'
      break;
    case '8':
      result += 'DCCC'
      break;
    case '9':
      result += 'CM'
      break;
    default:
      result += ''
      break;
  }

  switch (number[2]) {
    case '1':
      result += 'X'
      break;
    case '2':
      result += 'XX'
      break;
    case '3':
      result += 'XXX'
      break;
    case '4':
      result += 'XL'
      break;
    case '5':
      result += 'L'
      break;
    case '6':
      result += 'LX'
      break;
    case '7':
      result += 'LXX'
      break;
    case '8':
      result += 'LXXX'
      break;
    case '9':
      result += 'XC'
      break;
    default:
      result += ''
      break;
  }

  switch (number[3]) {
    case '1':
      result += 'I'
      break;
    case '2':
      result += 'II'
      break;
    case '3':
      result += 'III'
      break;
    case '4':
      result += 'IV'
      break;
    case '5':
      result += 'V'
      break;
    case '6':
      result += 'VI'
      break;
    case '7':
      result += 'VII'
      break;
    case '8':
      result += 'VIII'
      break;
    case '9':
      result += 'IX'
      break;
    default:
      result += ''
      break;
  }

  return result
}

console.log(solution(1990)) // MCMXC
console.log(solution(2008)) // MMVIII
console.log(solution(1666)) // MDCLXVI
console.log(solution(1000)); // M
