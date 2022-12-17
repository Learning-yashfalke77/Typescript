// Interfaces describe the structure of object
// inheritance in interface

interface Named {
    readonly name: string;
    // -- optional properties
    outputName?: string;
}

interface Age {

}

interface Greet extends Named, Age {
    greet(phrase: string): void;
}

// -------------------------------- interface used in classes --------------------------------------
// you can add read only
class Person implements Greet {
    readonly name: string
    // ;can also define optional parameters

    constructor(n: string) {
        this.name = n
    }

    greet(phrase: string): void {
        console.log(`${phrase} - ${this.name}`);
    }
}

const user1 = new Person('yash');
user1.greet('hello my dear')

// interface is just like abstract , but interface does not contain implementation details where as in  abstract we have to mention implementation details

// ---------------------------------------- using interfaces in object ----------------------------------

let user2: Greet
user2 = {
    name: 'yash',
    greet(phrase: string) {
        console.log(`${phrase} - ${this.name}`);
    }
}

user2.greet('Hello there')

// -------------------------- using interface to define structure of function ---------------------------------
interface AddFn {
    (a: number, b: number): number;
}

const add2: AddFn = (a: number, b: number) => {
    return a + b;
}