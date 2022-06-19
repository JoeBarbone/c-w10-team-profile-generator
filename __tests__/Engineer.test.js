const Engineer = require("../lib/Engineer.js");

const testEng = {
    github: "engineer-github",
    role: "Engineer"
}


test ("creates new engineer with parameters", () => {
    expect(testEng.github).toEqual("engineer-github");
    expect(testEng.role).toEqual("Engineer");
})