const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 },
  5,
  true,
];

persons.push({ name: "Anna", age: 29 });

// console.log(persons[1])
console.log(persons)
persons.splice(3, 1)
console.log(persons)