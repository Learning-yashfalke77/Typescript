// decorator with function should start with Capital
// decorator added to class gets a constructor function as a parameter

// function Logger(constructor: Function) {
//     console.log('logging....');
//     console.log(constructor);
// }

// decorators run when ts defines a class not when the class is instantiated

// --2nd way to use decorator - Factory decorators
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

// By putting _ in place of constructor : telling that i know we get argument constructor but i wont use it

function withTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const element = document.getElementById(hookId)
        const p = new constructor()
        if (element) {
            element.innerHTML = template
            const h1 = document.querySelector('h1')! as HTMLHeadingElement
            h1.innerText = p.name
        }
    }
}

// @Logger
@Logger('Logging - Person')     //--- using factory decorator
@withTemplate('<h1>Person Object</h1>', 'app')
class Person1 {
    name = 'yash'
    constructor() {
        console.log('creating person object');
    }
}

const p1 = new Person1()
console.log(p1);

// bottom most decorator runs first , but in factory decorators it runs in serial then inside decorators run from bottom then up

// ------------------------------------------------------------------------------------------------------------------------
// property decorator
function Log(target: any, propertyName: string) {
    console.log('property decorator');
    console.log(target);  // target will be prototype
    console.log(propertyName);
}

// accessor decorator
function Log1(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// method decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {  // name is the name of method and position of argument
    console.log('parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    private _title: string
    private _price: number

    constructor(t: string, p: number) {
        this._title = t
        this._price = p
    }

    @Log1
    public set productPrice(p: number) {
        if (p > 0) {
            this._price = p;
        } else {
            throw new Error('This must be a price with greater than 0')
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }

}

// decorators run when the class is defined or function is defined
// decorators help for the setup of class definition
// we can return in decorator but in case of class, method and accessor only 

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    // value key of descriptor holds function 
    const originalMethod = descriptor.value
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjustedDescriptor

}

class Printer {
    message: string = 'this works'

    @AutoBind
    showMessage() {
        console.log(this.message);
    }

}

const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)

// ------------------------------------- decorator for validation -----------------------------------------
interface ValidatorConfig {
    [property: string]: {
        [validatorProp: string]: string[]   // ['required', 'positiveNumber']
    }
}

const registeredValidators: ValidatorConfig = {

}

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
    console.log(target.constructor.name);
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    console.log(objValidatorConfig);
    if (!objValidatorConfig) {
        return true
    }
    let isValid = true
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]!) {
            console.log(validator);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break;
                default:
                    break;
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}

const courseForm = document.querySelector('form')! as HTMLFormElement
courseForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const titleInput = document.querySelector('#title')! as HTMLInputElement
    const priceInput = document.querySelector('#price')! as HTMLInputElement
    const title = titleInput.value
    const price = +priceInput.value
    const createdCourse = new Course(title, price)
    if (!validate(createdCourse)) {
        alert('invalid input pls try again')
        return
    }
    console.log(createdCourse);

})

