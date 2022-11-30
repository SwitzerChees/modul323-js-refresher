const randomNumber = Math.random();
console.log(randomNumber);

if (randomNumber < 0.25) {
  console.log("Less than 0.25");
} else if (randomNumber <= 0.5) {
  console.log("Less than 0.5");
} else {
  console.log("More than 0.5");
}

const intRandomNumber = Math.floor(Math.random() * 5);
console.log(intRandomNumber);

switch (intRandomNumber) {
  case 1:
    console.log("Number is 1");
    break;
  case 3:
    console.log("Number is 3");
  default:
    console.log("Number is neither 1 nor 3");
    break;
}
