const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    const testIntern = {
        school: "Western Governors University",
        role: "Inter"
    };



test ("creates new intern with parameters", () => {
    const intern = new Intern(testIntern);
    expect(testIntern.school = "Western Governors University");
    expect(testIntern.role = "Inter");
})

})