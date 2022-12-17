// compile typescript to javascript: tsc {filename of typescript}
// --------------------- core types --------------------------------
// 1) Number 2) String 3) Boolean

// (parameter: type of parameter allowed) in function
function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    if (printResult) {
        console.log(`${resultPhrase} ${n1 + n2}`)
    }
    return n1 + n2
}

const n1 = 3
const n2 = 5
const printResult = false
const resultPhrase = 'Your result is: '

const result = add(n1, n2, printResult, resultPhrase)

// ------------------------------------------------ type Inference ----------------------------------
// while declaraing variable need not to mention it type, typescript automatically detects its type

// ----------------------------------------- types : 4) objects -----------------------------------
//  defininy key and its type in object if you do not mention it will automatically take
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "yash",
//     age: 30,
// }

const person = {
    name: "yash",
    age: 30,
}


// ----------------------------------------- types : 5) arrays -----------------------------------
const people = {
    name: "yash",
    age: 30,
    hobbies: ['sports', 'cooking']
}

let specialActivities: string[]   // array of strings
let specialActivities1: any[]     // array of any types

for (const hobby in people.hobbies) {
    // console.log(people.hobbies[hobby].toUpperCase());
}

// ------------------------------------------ types: 6) tuple ---------------------------------------
const person1: {
    name: string;
    age: number;
    role: [number, string]    // tuple
} = {
    name: "yash",
    age: 30,
    role: [2, "author"]
}
// cannot add any other thing in role

// ------------------------------------------- types: 7) enum ----------------------------------------
// syntax: enum Variablename (start with upperCase) {value}
enum Role { ADMIN, READ_ONLY, USER }
const people1 = {
    name: "yash",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}

console.log(people1.role);

// --------------------------------------------- types: 8) any ----------------------------------------
// any is not preferred 
// using any gets rid of typescript function
let favourite: any[]

// ----------------------------------------------- types: 9) union ------------------------------------
function combine(n1: number | string, n2: number | string) {
    let result
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2
    } else {
        result = n1.toString() + n2.toString();
    }
    return result
}

const combinedAge = combine(5, 10)
console.log(combinedAge);

// --------------------------------- types : 10) literal types --------------------------------------
// when we define a const variable with particular value then it checks for that value only


// ----------------------------------- types 11) type aliases ------------------------------------------
// creating our own type
type Combinable = number | string

function combine1(n1: Combinable, n2: Combinable) {
    let result
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2
    } else {
        result = n1.toString() + n2.toString();
    }
    return result
}

// ------------------------------------ type: 12) type unknown ---------------------------------------
let yyooo: unknown
// unkonown does not disablr type checking like any

// ------------------------------------- type: 13) type never----------------------------------------
// void returns undefined
// never returns nothing
function generateError(message: string, code: number): never {
    throw { message, errorCode: code }
}

generateError('You got an Error boy', 500)
