const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    const testEmp = {
        name: "Joe",
        id: "007",
        email: "joe@aol.com"
    };



test ("creates new employee with parameters", () => {
    const employee = new Employee(testEmp)
    expect(testEmp.name = "Joe");
    expect(testEmp.id = "007");
    expect(testEmp.email = "joe@aol.com");
})

})