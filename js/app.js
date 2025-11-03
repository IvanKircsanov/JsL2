// let x = 10
// let y = 5
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// let number = 10
// number = number + 20
// number += 20
// number -= 20;
// number *= 20;
// number /= 20;
// number %= 20;
// console.log(number);

// const one = 4
// const two = 8
// const three = 4
// console.log(one <= three);

// 3 ( === ) : strogoe ravestwa
// 2 ( == ) : ne strogoe ravestwa


//Methode floor

// const number = 2.7 
// console.log(Math.floor(number));

// const number = 2.7;
// console.log(Math.ceil(number));

// const number = 2.7;
// console.log(Math.round(number));

// const number = 2.7;
// console.log(Math.max(7, 5, 10, 3, 300, 999));

// console.log(Math.min(7, 5, 10, 4, 300, 999));

// const number = Math.random()
// console.log(number);

// const max = 20
// const min = 10
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const number = Math.sqrt(225)
// console.log(number);

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue']
const min = 0
const max = colors.length - 1
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index]
document.body.style.backgroundColor = color
console.log(index);
