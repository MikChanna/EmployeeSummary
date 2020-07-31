class Employee {
  constructor(name, id, email) {
    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!id) {
      throw new Error("You are missing the id.");
    }
    if (!email) {
      throw new Error("You are missing the email.");
    }
    this.name = getName();
    this.id = getID();
    this.email = getEmail();
  }

  getName() {}

  getID() {}

  getEmail() {}
}

module.exports = Employee;
