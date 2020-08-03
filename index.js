const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = [];

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");
// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser(answers) {
//   return inquirer.prompt([
//     {
//       type: "input",
//       message: "Employee Name",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "ID #",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "Email Address",
//       name: "email",
//     },
//     {
//       type: "list",
//       name: "role",
//       message: "Role?",
//       choices: ["Manager", "Engineer", "Intern"],
//     },
//     {
//       type: "list",
//       name: "next",
//       message: "Would you like to enter a new employee?",
//       choices: ["yes", "no"],
//     },
//   ]);
// }
function promptUser(answers) {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        addManager();
      } else if (answers.role === "Engineer") {
        addEngineer();
      } else if (answers.role === "Intern") {
        addIntern();
      }
    });
}
function addManager(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the manager's ID #?",
        name: "managerid",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addEmployee",
        choices: ["yes", "no"],
      },
    ])
    .then((answers) => {
      let manager = new Manager(
        answers.managerName,
        answers.managerid,
        answers.managerEmail,
        answers.officeNumber
      );
      employees.push(manager);
      console.log(employees);
      if (answers.addEmployee === "yes") {
        promptUser();
      } else {
        return;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function addEngineer(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineer's ID #?",
        name: "engineerid",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the their github link?",
        name: "github",
      },
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addEmployee",
        choices: ["yes", "no"],
      },
    ])
    .then((answers) => {
      let engineer = new Engineer(
        answers.engineerName,
        answers.engineerid,
        answers.engineerEmail,
        answers.github
      );
      employees.push(engineer);
      console.log(employees);
      if (answers.addEmployee === "yes") {
        promptUser();
      } else {
        return;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function addIntern(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the intern's ID #?",
        name: "internid",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
      },
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "addEmployee",
        choices: ["yes", "no"],
      },
    ])
    .then((answers) => {
      let intern = new Intern(
        answers.internName,
        answers.internid,
        answers.internEmail,
        answers.school
      );
      employees.push(intern);
      console.log(employees);
      if (answers.addEmployee === "yes") {
        promptUser();
      } else {
        return;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

promptUser();
// function promptLoop() {
//   promptUser()
//     .then(function (answers) {
//       console.log(
//         "Name: " +
//           answers.name +
//           "\nID Number: " +
//           answers.id +
//           "\nEmail Address: " +
//           answers.email +
//           "\nRole: " +
//           answers.role +
//           "\nEnter New Employee?: " +
//           answers.next
//       );
//       if (answers.next === "yes") {
//         promptLoop();
//       } else {
//         console.log(
//           "Name: " +
//             answers.name +
//             "\nID Number: " +
//             answers.id +
//             "\n Email Address: " +
//             answers.email +
//             "\nRole: " +
//             answers.role
//         );
//       }
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }
// promptLoop();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
