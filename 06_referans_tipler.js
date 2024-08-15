let objeA = { deger: 10 };
// let objeB = { deger: 10 };
let objeB = { ...objeA };
objeB.deger = 20;

console.log(objeA);
console.log(objeB);

console.log(objeA === objeB); // false

let number1 = 10;
let number2 = 10;

console.log(number1 === number2); // true