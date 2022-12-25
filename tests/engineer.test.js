const Engineer = require("../src/engineer.js");

test("Can create a github.", () => {
    const testGithub = "johngit";
    const employeeInstance = new Engineer("john", 2, "john@outlook.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "johngit";
    const employeeInstance = new Engineer("john", 2, "john@outlook.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("john", 2, "john@outlook.com", "johngit");
    expect(employeeInstance.getRole()).toBe(returnValue);
});