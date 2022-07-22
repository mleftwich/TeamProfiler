// CREATE GENERIC EMPLOYEE CLASS

class Employee {
   
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // RETURN USER INPUTS
    getName() {
        return this.name
      }
      getId() {
        return this.id
      }
      getEmail() {
        return this.email
      }
      // DEFINE ROLE
      getRole() {
        return 'Employee'
      }
}
 
module.exports = Employee;