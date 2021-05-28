const Intern = require("../lib/Intern.js")

describe("Intern", () => {
    describe("getRole", () => {
        it("Should return the employee as an Intern", () => {
            const name = "InternName";
            const id = "InternId";
            const email = "InternEmail";
            const school = "InternGithub";
            const employee = new Intern(name,id,email,school);
            const result = employee.getRole();
            expect(result).toEqual("Intern");
        })

    })
})
