"use strict";
const userName = 'max';
let age1 = 30;
age1 = 29;
const sum = (n1, n2) => (n1 + n2);
console.log(sum(2, 3));
const incremeant = (n2, n1 = 10) => (n1 + n2);
console.log(incremeant(2));
const hobbies = ['sports', 'cooking'];
const activeHobbies = [...hobbies, 'hiking'];
const falke = {
    names: 'yash',
    age: 21,
};
const newFalke = Object.assign(Object.assign({}, falke), { education: 'Btech' });
const sums = (...numbers) => {
    numbers.reduce((curResl, curVal) => (curResl + curVal), 0);
};
console.log(sums(4, 3, 2, 10));
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { names, age } = falke;
