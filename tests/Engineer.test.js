const Engineer = require("../library/engineer");

test("Set GitHub account via constructor", () => {
    const testValue = "GitHubAccount";
    const e = new Engineer("Carlos", 1, "carlos@carlos.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole function should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Carlos", 1, "carlos@carlos.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username with getGithub function", () => {
    const testValue = "GitHubAccount";
    const e = new Engineer("Carlos", 1, "carlos@carlos.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
