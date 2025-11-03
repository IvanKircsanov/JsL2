let celsius = 25,
  fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

let daysInMonth = 30,
  hoursInMonth = daysInMonth * 24,
  minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth, minutesInMonth);

let health = 100,
  energy = 80;
health -= 20;
energy -= 30;
console.log(health, energy);

let totalPrice = 200,
  discountedPrice = totalPrice * 0.9;
console.log(discountedPrice);

const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

let number = 64,
  sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42,
  stringNumber = "256";
let convertedInt = parseInt(stringNumber),
  convertedString = integer.toString();
console.log(convertedInt, convertedString);
