"use strict";
class Department {
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
Department.PHYSICAL_YEAR = 2021;
console.log(Department.createEmployee('falke'), Department.PHYSICAL_YEAR);
class ITDepartment extends Department {
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
class AccountingDepartment extends Department {
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
const it = new ITDepartment(1, ['yash']);
it.addEmployee('Vinita Mam');
it.addEmployee('Icchanshu Sir');
it.describe();
const accounting = new AccountingDepartment(2, ['last report']);
console.log(accounting.mostlastReport);
accounting.mostlastReport = 'This is most last report';
console.log(accounting.mostlastReport);
