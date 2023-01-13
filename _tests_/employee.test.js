const Employee = require('./test/employee');

test ('test if we can get the constructor values for the employee object', ()=> {
    expect (employee.name).toBe('Matthew');
    expect (employee.id).toBe('1829');
    expect (employee.email).toBe('matthewjollibee@gmail.com');
});

test ('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Matthew');
});

test ('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1829');
});

test ('test if we can get the id from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('matthewjollibee@gmail.com');
})

