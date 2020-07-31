const employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email);
    this.github = getGithub();
  }

  getGithub() {}

  getRole() {}
}
