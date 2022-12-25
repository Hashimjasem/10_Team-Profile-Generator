const Intern = require("../src/intern.js");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("john", 2, "john@outlook.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("john", 2, "john@outlook.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("john", 2, "john@outlook.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});