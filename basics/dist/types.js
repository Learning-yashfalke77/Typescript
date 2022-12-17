"use strict";
function add(n1, n2, showResult, resultPhrase) {
    if (printResult) {
        console.log(`${resultPhrase} ${n1 + n2}`);
    }
    return n1 + n2;
}
const n1 = 3;
const n2 = 5;
const printResult = false;
const resultPhrase = 'Your result is: ';
const result = add(n1, n2, printResult, resultPhrase);
const person = {
    name: "yash",
    age: 30,
};
const people = {
    name: "yash",
    age: 30,
    hobbies: ['sports', 'cooking']
};
let specialActivities;
let specialActivities1;
for (const hobby in people.hobbies) {
}
const person1 = {
    name: "yash",
    age: 30,
    role: [2, "author"]
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
const people1 = {
    name: "yash",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
console.log(people1.role);
let favourite;
function combine(n1, n2) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combinedAge = combine(5, 10);
console.log(combinedAge);
function combine1(n1, n2) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
let yyooo;
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError('You got an Error boy', 500);
