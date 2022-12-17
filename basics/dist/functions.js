"use strict";
function adds(n1, n2) {
    return n1 + n2;
}
function add1(n1, n2) {
    console.log(n1 + n2);
}
let combinedValue;
combinedValue = adds;
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
