const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1600";
    const employee = new Manager("Michael mikelic", 1, "michaelmikelic@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Michael Mikelic", 1, "michaelmikelic@gmail.com", "michaelmikelic");
    expect(employee.getRole()).toBe(role);
  });