const Employee = require("./employee");

// CREATE MANAGER CLASS WITH OFFICE NUMBER
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    // RETURN USER INPUT FOR OFFICE NUMBER
    getOfficeNum() {
        return this.officeNum;
    }
    // DEFINE ROLE
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;
