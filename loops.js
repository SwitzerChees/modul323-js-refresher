for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

while (randomNumber <= 8) {
  console.log("random number is", randomNumber);
  randomNumber = Math.floor(Math.random() * 10);
}

const fruits = ['apple', 'banana', 'pineapple'];
for (const fruit of fruits) {
    console.log(fruit)
}