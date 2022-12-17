"use strict";
const nav = ['yash', 'falke'];
const promise = new Promise((reject, resolve) => {
    setTimeout(() => {
        resolve('this is done');
    }, 1000);
});
function createCourseGoal(title, description, completeUntil) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
const name3 = ['yash', 'falke'];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'yash' }, { age: 21 }));
function countAndPrint(element) {
    let description = 'got no value';
    if (element.length === 1) {
        description = 'we got 1 length';
    }
    else if (element.length > 1) {
        description = `we got ${element} length`;
    }
    return [element, description];
}
console.log(countAndPrint('hi there!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('yash');
console.log(textStorage.getItems());
