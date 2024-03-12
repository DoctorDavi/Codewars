function friend(friends) {
  let result = []

  for (const friend of friends) { // loops through array
    if (friend.length == 4) { // when number of characters equal 4
      result.push(friend)
    }
  }

  return result
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); // ["Ryan", "Yous"]
console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
