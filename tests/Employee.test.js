const Employee = require("../library/employee");

test("Can set name via constructor", () => {
    const name = "Carlos";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor", () => {
    const testValue = 10;
    const e = new Employee("Carlos", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor", () => {
    const testValue = "carlos@carlos.com";
    const e = new Employee("Carlos", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName function", () => {
    const testValue = "Carlos";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId function", () => {
    const testValue = 10;
    const e = new Employee("Carlos", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail function", () => {
    const testValue = "carlos@carlos.com";
    const e = new Employee("Carlos", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
