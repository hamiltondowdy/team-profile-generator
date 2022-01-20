const Employee = require('../lib/Employee.js');

test('creates employee object', () => {

    

    
    const employee = new Employee('tim', 1, 'tim@tim.com');


    expect(employee.name).toBe('tim');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('tim@tim.com');

    
});