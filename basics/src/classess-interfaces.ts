// public is by default access modifier
// access modifier: public, private and readOnly, protected
// In protected you can provide access to child class
abstract class Department {
    // private id: number;       // use Shorthand property
    // private name: string;

    // static variable
    static PHYSICAL_YEAR = 2021
    protected employees: string[] = [];

    constructor(protected name: string, protected readonly id: number) {      //automatically property called with its value saved
    }

    //abstract method
    abstract describe(this: Department): void;

    addEmployee(this: Department, employee: string,) {
        this.employees.push(employee)
    }

    printEmployee(this: Department) {
        console.log(`No of Employees: ${this.employees.length}\nEmployees: ${this.employees}`);
    }

    // static method
    static createEmployee(name: string) {
        return {
            name
        }
    }

}

// const informationTechnology = new Department('Acc', 1)
// informationTechnology.addEmployee('Vinita Mam')
// informationTechnology.addEmployee('Icchanshu Sir')
// informationTechnology.printEmployee()
// informationTechnology.describe();

// accessing static method 
console.log(Department.createEmployee('falke'), Department.PHYSICAL_YEAR);

// --------------------------------------------- Inheritance ------------------------------------------
class ITDepartment extends Department {

    public admins: string[]

    constructor(id: number, admins: string[]) {
        super('IT', id)
        this.admins = admins
    }

    // overriding abstract method
    describe(this: ITDepartment): void {
        console.log(`Welcome to Company\nIT Department (${this.id}): ${this.name}`);
    }

    // method override
    override addEmployee(this: ITDepartment, employee: string): void {
        if (employee === 'yash') {
            return
        }
        this.employees.push(employee)
    }
}

class AccountingDepartment extends Department {

    private lastReport: string

    constructor(id: number, private reports: string[]) {
        super('Accounting', id)
        this.lastReport = `${reports[0]}`
    }

    // abstracting override method
    describe(this: AccountingDepartment): void {
        console.log(`Welcome to Company\nIT Department (${this.id}): ${this.name}`);
    }

    // getter method
    public get mostlastReport() {
        return this.lastReport
    }

    public set mostlastReport(v: string) {
        this.lastReport = v;
    }



}

const it = new ITDepartment(1, ['yash'])
it.addEmployee('Vinita Mam')
it.addEmployee('Icchanshu Sir')
it.describe()

const accounting = new AccountingDepartment(2, ['last report'])
// accessing getter method
console.log(accounting.mostlastReport);
// setting value with setter method
accounting.mostlastReport = 'This is most last report'
console.log(accounting.mostlastReport);