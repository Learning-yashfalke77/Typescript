type admin = {
    name: string;
    privileges: string[];
}

type employee = {
    name: string;
    startDate: Date;
}

// ------------- intersection types --------------------
type elevatedEmployee = admin & employee;

const employee: elevatedEmployee = {
    name: 'yash',
    privileges: [
        'data readonly'
    ],
    startDate: new Date()

}

type Combinables = string | number
type Numeric = number | boolean

type Universal = Combinables & Numeric  // number is intersection among given type

//  ------------------------------------- type guards --------------------------------------------------
// typeof is type guard
function add4(a: Combinables, b: Combinables) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

// in
type unknownEmployee = admin | employee
function printEmployeeInformation(emp: unknownEmployee) {
    if ('privileges' in emp) {
        console.log('Privileges' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(employee)

// instance of
class Car {
    drive() {
        console.log('Driving Car....');
    }
}

class Truck {
    drive() {
        console.log('Driving Truck....');
    }

    loadTruck(amount: number) {
        console.log(`loading truck ${amount}`);
    }
}

const c1 = new Car()
const t1 = new Truck()

type Vehicle = Car | Truck

function useVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadTruck(1000)
    }
}

// ------------------------------------------- discriminated unions ---------------------------------------
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'animal';
    runningSpeed: number;
}

type animal = Bird | Horse

function moveAnimal(animal: animal) {
    let speed;
    switch (animal.type) {
        case 'animal':
            speed = animal.runningSpeed
            break;
        case 'bird':
            speed = animal.flyingSpeed
            break;

        default:
            break;
    }
    console.log(`animal moving with ${speed} `);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 })

// ----------------------------- typecasting ---------------------------------------------------------------
// here we are telling typescript that the element has this type , in case ts cant figure out
const paragraph = document.querySelector('#message-output')! as HTMLParagraphElement

// const userInput = <HTMLInputElement>document.querySelector('#user-input')!
const userInput = document.querySelector('#user-input')! as HTMLInputElement
// here ! means telling ts expression in front of it , it will never return null
// and telling ts that this will be html Input element

console.log(userInput);

// ------------------------------------- index properties -------------------------------------------------
// used to make objects flexible
// defining index type
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital letter'
}

// ---------------------------------------- function Overloads --------------------------------------------
function add5(a: number, b: number): number;
function add5(a: string, b: string): string;
function add5(a: Combinables, b: Combinables) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

// ----------------------------------------- optional chaining -----------------------------------------
// generally used when data is coming from backend , there is uncertainty when we get data
const fetchedUserData = {
    id: 'u1',
    name: 'yash',
    job: {
        title: 'CEO',
        description: 'My own company',
    }
}

console.log(fetchedUserData?.job?.title);

// it checks if fetchedUserData exists, if it exists then got job, again check if it exists, then only it will go to title

// ------------------------------------------------- Nullish Coalescing ---------------------------------------
// same as optional chaining, helps in to detect null/defined in object
// but only for null, undefined
const users = null

const storageData = users ?? 'Default'