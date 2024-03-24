function getPINs(observedPIN) {
  const pad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [null, '0', null] // Use null or '' for empty spaces (optional)
  ];

  const adjacentKeys = observedPIN.split('').map(digit => getSiblingKeys(digit, pad));
  const results = cartesian(adjacentKeys).map(arr => arr.join(''));

  return results;

  function getSiblingKeys(digit, pad) {
    const adjacent = [];
    const row = pad.findIndex(arr => arr.indexOf(digit) !== -1);
    const col = pad[row].indexOf(digit);

    adjacent.push(digit);
    if (row > 0) adjacent.push(pad[row - 1][col]);
    if (row < 2 || digit === '8') adjacent.push(pad[row + 1][col]);
    if (col > 0 && digit !== '0') adjacent.push(pad[row][col - 1]);
    if (col < 2 && digit !== '0') adjacent.push(pad[row][col + 1]);

    return adjacent;
  }

  function cartesian(arr) {
    return arr.reduce((a, b) => (
      a.map((x) =>
        b.map((y) =>
          x.concat(y)
        )
      ).reduce((a, b) => (
        a.concat(b)
      ), [])
    ), [[]])
  }
}

console.log(getPINs('1357'));
