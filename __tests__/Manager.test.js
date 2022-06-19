const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    const testMgr = {
        name: "Joe",
        id: "007",
        email: "joe@aol.com",
        office: "254",
    };
//})

describe ("constructor tests", () => {

    test("should be new instance of Manager", () => {
        const manager = new Manager(testMgr);
        expect(manager).toBeInstanceOf(Manager);
    });

    test("should construct a new instance of the manager", () => {
        
        const manager = new Manager(testMgr);
        expect(manager.name = "Joe");
        expect(manager.id = "007");
        expect(manager.email = "Joe@aol.com");
        expect(manager.office = "254");

    });

})
})
