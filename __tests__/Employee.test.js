const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})


test("Testing email.", () => {
    const email = "email@email.com";
    const employeeInstance = new Employee("Nemo", 2, email);
    expect(employeeInstance.email).toBe("email@email.com");
})

