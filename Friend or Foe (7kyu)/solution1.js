function friend(friends){
  return friends.filter(n => n.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); // ["Ryan", "Yous"]
console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
