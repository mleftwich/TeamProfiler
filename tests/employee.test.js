const Employee = require("../src/employees/employee")


// TEST THAT NEW EMPLOYEES NAME IS RETURNED ACCURATELY 
describe('Test Employee Name', () => {
    test('getName() will return NAME property', () => {
        const name = 'matt'
        const id = '1'
        const email = 'matt@matt.com'
        
        const testEmp = new Employee(name, id, email);

        const result = testEmp.getName()

        expect(result).toStrictEqual(name)
    })
})


// TEST THAT NEW EMPLOYEES EMAIL IS RETURNED ACCURATELY 
describe('Test Employee Email', () => {
    test('getEmail() will return EMAIL property', () => {
        const name = 'matt'
        const id = '1'
        const email = 'matt@matt.com'
        
        const testEmail = new Employee(name, id, email);

        const result = testEmail.getEmail()

        expect(result).toStrictEqual(email)
    })
})

// TEST THAT NEW EMPLOYEES ID IS RETURNED ACCURATELY 
describe('Test Employee ID', () => {
    test('getID() will return ID property', () => {
        const name = 'matt'
        const id = '1'
        const email = 'matt@matt.com'
        
        const testEmail = new Employee(name, id, email);

        const result = testEmail.getId()

        expect(result).toStrictEqual(id)
    })
})

// TEST THAT NEW EMPLOYEES ROLE IS LISTED APPROPRIATELY 
describe('Test Employee Role', () => {
    test('getEmail() will return appropriate ROLE', () => {
        const name = 'matt'
        const id = '1'
        const email = 'matt@matt.com'
        const role = 'Employee'
        const testEmail = new Employee(name, id, email);

        const result = testEmail.getRole()

        expect(result).toStrictEqual(role)
    })
})
