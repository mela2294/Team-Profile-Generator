const Engineer = require('./lib/manager');
const engineer = new Manager('Mela', '1493', 'melajollibee@gmail.com', '1112');

test ('test if we can get the constructor values for the employee object', ()=> {
    expect (engineer.name).toBe('Ken');
    expect (engineer.id).toBe('1997');
    expect (engineer.email).toBe('kenjollibee@gmail.com');
    expect (engineer.github).toBe('0620');
    expect (engineer.role).toBe('Manager');
});

test ('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Ken');
});

test ('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1997');
});

test ('test if we can get the id from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('kenjollibee@gmail.com');
});

test ('test if we can get the id from the getOfficeNumber() method', () => {
    expect(engineer.getGithub()).toBe('0620');
});

test ('test if we can get the id from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});