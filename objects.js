const person = {
    name: 'Max',
    lastName: 'Mustermann',
    age: 30,
    father: {
        name: 'John',
        feather: {
            name: 'Hans'
        }
    }
}

console.log(person);
console.log(JSON.stringify(person));