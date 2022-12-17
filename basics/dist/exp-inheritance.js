"use strict";
class Departments {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(`No of Employees: ${this.employees.length}\nEmployees: ${this.employees}`);
    }
    static createEmployee(name) {
        return {
            name
        };
    }
}
Departments.PHYSICAL_YEAR = 2021;
console.log(Departments.createEmployee('falke'), Departments.PHYSICAL_YEAR);
class ITDepartments extends Departments {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
    describe() {
        console.log(`Welcome to Company\nIT Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        if (employee === 'yash') {
            return;
        }
        this.employees.push(employee);
    }
}
class AccountingDepartments extends Departments {
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.lastReport = `${reports[0]}`;
    }
    describe() {
        console.log(`Welcome to Company\nIT Department (${this.id}): ${this.name}`);
    }
    get mostlastReport() {
        return this.lastReport;
    }
    set mostlastReport(v) {
        this.lastReport = v;
    }
}
const its = new ITDepartment(1, ['yash']);
its.addEmployee('harshs');
its.addEmployee('siddhesh');
its.describe();
const accountings = new AccountingDepartments(2, ['accounting1']);
console.log(accountings.mostlastReport);
accountings.mostlastReport = 'this is last report...';
console.log(accountings.mostlastReport);
