const Manager = require("../src/manager.js");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("john", 2, "john@outlook.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("john", 2, "john@outlook.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("john", 2, "john@outlook.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});