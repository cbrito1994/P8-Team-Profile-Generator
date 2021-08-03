const Manager = require("../library/manager");

test("Set office number via constructor", () => {
    const testValue = 10;
    const e = new Manager("Carlos", 1, "carlos@carlos", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole function should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Carlos", 1, "carlos@carlos", 10);
    expect(e.getRole()).toBe(testValue);
});

test("Get office number with getOffice function", () => {
    const testValue = 100;
    const e = new Manager("Carlos", 1, "carlos@carlos", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
