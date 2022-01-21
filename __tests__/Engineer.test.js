
   
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Nemo";
    const employeeInstance = new Engineer("Nemo", 2, "email@email.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Nemo";
    const employeeInstance = new Engineer("Nemo", 2, "email@email.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Nemo", 2, "email@email.com", "Nemo");
    expect(employeeInstance.getRole()).toBe(returnValue);
});