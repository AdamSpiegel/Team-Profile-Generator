const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("initialize", () => {
        it("Should return the employee's name, id, and email",
            () => {
                const name = "employeeName";
                const id = "EmployeeID";
                const email = "EmplyoeeEmail";
                const employee = new Employee(name, id, email);
                expect(employee.name).toBe(name)
                expect(employee.id).toBe(id)
                expect(employee.email).toBe(email)

            })

    })

    describe("getName()", () => {
        it("Should return the employee's name",
            () => {
                const name = "employeeName";
                const id = "EmployeeID";
                const email = "EmployeeEmail";
                const employee = new Employee(name, id, email);
                expect(employee.getName()).toBe(name)
            })

    })

})

describe("getId()", () => {
    it("Should return the employee's id",
        () => {
            const name = "employeeName";
            const id = "EmployeeID";
            const email = "EmployeeEmail";
            const employee = new Employee(name, id, email);
            expect(employee.getId()).toBe(id)
        })

})

describe("getEmail()", () => {
    it("Should return the employee's email",
        () => {
            const name = "employeeName";
            const id = "EmployeeID";
            const email = "EmployeeEmail";
            const employee = new Employee(name, id, email);
            expect(employee.getEmail()).toBe(email)
        })

})

