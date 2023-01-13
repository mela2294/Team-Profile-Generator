const Manager = require('./lib/manager');
const manager = new Manager('Mela', '1493', 'melajollibee@gmail.com', '1112');

test ('test if we can get the constructor values for the employee object', ()=> {
    expect (manager.name).toBe('Mela');
    expect (manager.id).toBe('1493');
    expect (manager.email).toBe('melajollibee@gmail.com');
    expect (manager.officeNumber).toBe('1112');
    expect (manager.role).toBe('Manager');
});

test ('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Mela');
});

test ('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1493');
});

test ('test if we can get the id from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('melajollibee@gmail.com');
});

test ('test if we can get the id from the getOfficeNumber() method', () => {
    expect(manager.getofficeNumber()).toBe('1112');
});

test ('test if we can get the id from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});