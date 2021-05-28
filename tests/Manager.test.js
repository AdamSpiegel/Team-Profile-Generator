const Manager = require("../lib/Manager.js")

describe("Manager", () => {
    describe("getRole", () => {
        it("Should return the employee as a Manager", () => {
            const name = "ManagerName";
            const id = "ManagerId";
            const email = "ManagerEmail";
            const officeNumber = "ManagerGithub";
            const employee = new Manager(name,id,email,officeNumber);
            const result = employee.getRole();
            expect(result).toEqual("Manager");
        })

    })
})