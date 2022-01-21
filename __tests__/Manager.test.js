const Employee = require('../lib/Manager.js');

test("Testing name.", () => {
    const name = "tim";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})