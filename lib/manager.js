// Importing the employee parent class
const Employee = require('./Employee');

// Manager class extends the employee parent class
class Manager extends Employee {
    // Contructor function
    constructor(name, id, email, officeNumber) {
        super(name, 'Manager', id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Exporting
module.exports = Manager;