const Employee = require('../lib/Employee.js');

test('creates employee object', () => {

    

    
    const employee = new Employee('nemo', 1, 'email@email.com');


    expect(employee.name).toBe('nemo');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('email@email.com');

    
});