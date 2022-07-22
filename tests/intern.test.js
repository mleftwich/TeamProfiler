const Intern = require('../src/employees/intern');

// TEST THAT APPROPRIATE ROLE IS REFLECTED
describe('Test Intern ROLE', () => {
 test("getRole() will return Intern", () => {
    const role = 'Intern'
    const name = 'matt'
    const id = '1'
    const email = 'matt@matt.com'

    const testRole = new Intern(name, id, email);
    const result = testRole.getRole()

    expect(result).toStrictEqual(role)
 })
})

// TEST THAT MANAGER HAS AN OFFICE NUMBER
describe('Test Intern SCHOOL', () => {
    test("getSchool() will return Trilogy", () => {
       const role = 'Intern'
       const name = 'matt'
       const id = '1'
       const email = 'matt@matt.com'
       const school = 'Trilogy'
   
       const testSchool = new Intern(name, id, email, school);
       const result = testSchool.getSchool()
   
       expect(result).toStrictEqual(school)
    })
   })
   