const Engineer = require('../lib/employees/engineer');

// TEST THAT APPROPRIATE ROLE IS REFLECTED
describe('Test Engineer ROLE', () => {
 test("getRole() will return Engineer", () => {
    const role = 'Engineer'
    const name = 'matt'
    const id = '1'
    const email = 'matt@matt.com'

    const testRole = new Engineer(name, id, email);
    const result = testRole.getRole()

    expect(result).toStrictEqual(role)
 })
})

// TEST THAT ENGINEER HAS A GITHUB
describe('Test Engineer GITHUB', () => {
    test("getGitHub() will return mattHub", () => {
       const role = 'Engineer'
       const name = 'matt'
       const id = '1'
       const email = 'matt@matt.com'
       const gitHub = 'mattHub'
   
       const testGitHub = new Engineer(name, id, email, gitHub);
       const result = testGitHub.getGitHub()
   
       expect(result).toStrictEqual(gitHub)
    })
   })
   