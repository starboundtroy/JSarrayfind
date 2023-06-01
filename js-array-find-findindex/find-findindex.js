function findUserByUsername(usersArray, username) {
  return usersArray.find(user => user.username === username);
}

function removeUser(usersArray, username) {
  const index = usersArray.findIndex(user => user.username === username);
  if (index !== -1) {
    return usersArray.splice(index, 1)[0];
  }
  return undefined;
}

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

console.log(findUserByUsername(users, 'mlewis')); // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')); // undefined

console.log(removeUser(users, 'akagen')); // {username: 'akagen'}
console.log(removeUser(users, 'akagen')); // undefined
console.log(users);
