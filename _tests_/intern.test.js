const Intern = require('./lib/intern');
const Intern = new Intern('Robert', '3824', 'robertjollibee@gmail.com', 'Charleston');

test ('test if we can get the constructor values for the employee object', ()=> {
    expect (intern.name).toBe('Robert');
    expect (intern.id).toBe('3824');
    expect (intern.email).toBe('robertjollibee@gmail.com');
    expect (intern.school).toBe('Charleston');
});

test ('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Robert');
});

test ('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('3824');
});

test ('test if we can get the id from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('robertjollibee@gmail.com');
});

test ('test if we can get the id from the getOfficeNumber() method', () => {
    expect(intern.getSchool()).toBe('Charleston');
});

