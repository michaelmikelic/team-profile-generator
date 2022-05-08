const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "London School of Economics";
    const employee = new Intern("Monika Lewinsky", 1, "monicalewinsky@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Monica Lewinsky", 1, "monicalewinsky@gmail.com", "monicalewinsky");
    expect(employee.getRole()).toBe(role);
  });