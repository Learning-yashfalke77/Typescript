"use strict";
var _a;
const employee = {
    name: 'yash',
    privileges: [
        'data readonly'
    ],
    startDate: new Date()
};
function add4(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    if ('privileges' in emp) {
        console.log('Privileges' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation(employee);
class Car {
    drive() {
        console.log('Driving Car....');
    }
}
class Truck {
    drive() {
        console.log('Driving Truck....');
    }
    loadTruck(amount) {
        console.log(`loading truck ${amount}`);
    }
}
const c1 = new Car();
const t1 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadTruck(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'animal':
            speed = animal.runningSpeed;
            break;
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        default:
            break;
    }
    console.log(`animal moving with ${speed} `);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const paragraph = document.querySelector('#message-output');
const userInput = document.querySelector('#user-input');
console.log(userInput);
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital letter'
};
function add5(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const fetchedUserData = {
    id: 'u1',
    name: 'yash',
    job: {
        title: 'CEO',
        description: 'My own company',
    }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const users = null;
const storageData = users !== null && users !== void 0 ? users : 'Default';
