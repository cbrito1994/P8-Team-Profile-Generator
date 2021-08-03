const Intern = require("../library/intern");

test("Set school via constructor", () => {
    const testValue = "Stanford";
    const e = new Intern("Carlos", 1, "carlos@carlos.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole function should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Carlos", 1, "carlos@carlos.com", "Stanford");
    expect(e.getRole()).toBe(testValue);
});

test("Get school with getSchool function", () => {
    const testValue = "Stanford";
    const e = new Intern("Carlos", 1, "carlos@carlos.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
