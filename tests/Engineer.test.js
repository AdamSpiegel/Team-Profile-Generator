const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("getRole", () => {
        it("Should return the employee as an Engineer", () => {
            const name = "EngineerName";
            const id = "EngineerId";
            const email = "EngineerEmail";
            const github = "EngineerGithub";
            const employee = new Engineer(name,id,email,github);
            const result = employee.getRole();
            expect(result).toEqual("Engineer");
        })

    })
})

