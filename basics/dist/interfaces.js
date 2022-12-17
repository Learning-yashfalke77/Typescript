"use strict";
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} - ${this.name}`);
    }
}
const user1 = new Person('yash');
user1.greet('hello my dear');
let user2;
user2 = {
    name: 'yash',
    greet(phrase) {
        console.log(`${phrase} - ${this.name}`);
    }
};
user2.greet('Hello there');
const add2 = (a, b) => {
    return a + b;
};
