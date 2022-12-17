// generic type is which is kind of connected with some other type and it is flexible with what other type is
// 1) Array is generic type
const nav: Array<string> = ['yash', 'falke'] // string []

// 2) promise is generic type
const promise: Promise<string> = new Promise((reject, resolve) => {
    setTimeout(() => {
        resolve('this is done')
    }, 1000);
})

// 3) Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, completeUntil: Date) {
    const courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = completeUntil
    return courseGoal as CourseGoal
}

//  4) Read only
const name3: Readonly<string[]> = ['yash', 'falke']

// ------------------------------------------------------ creating our own generic --------------------------------------------------------
// 1) generic function
// using extends we are making constraints to the type that are being accepted
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

console.log(merge<{ name: string }, { age: number }>({ name: 'yash' }, { age: 21 }));


interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let description = 'got no value'
    if (element.length === 1) {
        description = 'we got 1 length'
    } else if (element.length > 1) {
        description = `we got ${element} length`
    }
    return [element, description]
}

console.log(countAndPrint('hi there!'));

// keyof constraints
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

// generic classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }

}

const textStorage = new DataStorage<string>()
textStorage.addItem('yash')
console.log(textStorage.getItems());
