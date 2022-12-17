// ----------------------------- let and const ------------------------------------------------------
const userName = 'max'
// userName = 'yoooo'
let age1 = 30
age1 = 29

// --------------------------------- arrow functions -------------------------------------------------
const sum = (n1: number, n2: number) => (
    n1 + n2
)

console.log(sum(2, 3));

// ----------------------------------- default arguments in function -----------------------------------
// always set default parameters at last
const incremeant = (n2: number, n1: number = 10) => (
    n1 + n2
)
console.log(incremeant(2));

// ------------------------------------ spread operator ------------------------------------------------
const hobbies = ['sports', 'cooking']
const activeHobbies = [...hobbies, 'hiking']

const falke = {
    names: 'yash',
    age: 21,
}

const newFalke = { ...falke, education: 'Btech' }

// ---------------------------------------- rest operators ---------------------------------------------
const sums = (...numbers: number[]) => {
    numbers.reduce((curResl, curVal) => (curResl + curVal), 0)
}

console.log(sums(4, 3, 2, 10));

// ---------------------------------------- destructuring ---------------------------------------------
const [hobby1, hobby2, ...remainingHobbies] = hobbies
const { names, age } = falke