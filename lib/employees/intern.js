const Employee = require("./employee");

// CREATE INTERN CLASS WITH SCHOOL 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // RETURN USER INPUT FOR SCHOOL
    getSchool() {
        return this.school;
    }
    // DEFINE ROLE
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;
