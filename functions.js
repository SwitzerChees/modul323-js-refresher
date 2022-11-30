function mul(number1, number2) {
  const result = number1 * number2;
  console.log("Result:", result);
}

const num1 = 5;
const num2 = 10;

mul(num1, num2);
mul(2, 3);

function toFahrenheit(celsius) {
  const result = celsius * 1.8 + 32;
  console.log("Celsius:", celsius, "Fahrenheit:", result);
}

toFahrenheit(80);

const modulo = (a, b) => {
  return a % b;
};
console.log(modulo(10, 3));

// Anonymous Function
() => {
  console.log("Anonymous");
};

const myContext = {
  name: "Max",
  age: 40,
  aging: function () {
    console.log(this);
    this.age++;
  },
  arrowAging: () => {
    console.log(this);
    this.age++;
  },
};

console.log(myContext.age);
myContext.aging();
console.log(myContext.age);
myContext.arrowAging();
console.log(myContext.age);
