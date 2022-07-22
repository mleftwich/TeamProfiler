const Manager = require('../src/employees/manager');

// TEST THAT APPROPRIATE ROLE IS REFLECTED
describe('Test Manager ROLE', () => {
 test("getRole() will return Manager", () => {
    const role = 'Manager'
    const name = 'matt'
    const id = '1'
    const email = 'matt@matt.com'

    const testRole = new Manager(name, id, email);
    const result = testRole.getRole()

    expect(result).toStrictEqual(role)
 })
})

// TEST THAT MANAGER HAS AN OFFICE NUMBER
describe('Test Manager OFFICE NUMBER', () => {
    test("getOfficeNum() will return 2", () => {
       const role = 'Manager'
       const name = 'matt'
       const id = '1'
       const email = 'matt@matt.com'
       const officeNum = '2'
   
       const testOfficeNum = new Manager(name, id, email, officeNum);
       const result = testOfficeNum.getOfficeNum()
   
       expect(result).toStrictEqual(officeNum)
    })
   })
   