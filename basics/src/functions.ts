// tsc {fileName.ts} -w : for automatically changes from ts to js (for one file)
// tsc --init (to initialize typescript config json, so that we can use all typescript folder)
// After tsc init just type tsc it will compile all files in js

// function with return type
// with function also typescript also detects automatically which type of function is, no need to mention
function adds(n1: number, n2: number): number {
    return n1 + n2
}

// function with void type
function add1(n1: number, n2: number): void {
    console.log(n1 + n2);
}

// definig variable as a function
// let combinedValue: Function
let combinedValue: (a: number, b: number) => (number)   //declaration of function type
combinedValue = adds

// callback function
function addAndHandle(n1: number, n2: number, callback: (num: number) => (void)) {
    const result = n1 + n2
    callback(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result);
})