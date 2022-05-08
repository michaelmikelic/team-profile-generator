const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "nikolateslagithub";
    const employee = new Engineer("Nikola Tesla", 1, "nikolatesla@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Nikola Tesla", 1, "nikolatesla@gmail.com", "nikolatesla");
    expect(employee.getRole()).toBe(role);
  });