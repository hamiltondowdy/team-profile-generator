// Require Modules
const fs = require('fs');
const Inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const generateTeam = require('./src/generateTeam.js');


function newTeam () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }
  // OOP Functions
  
  function addManager() {
    inquirer.prompt ([
  
  
      {
        type: "input",
        name: "managerId",
        message: "Enter Manager ID"
      },
      {
        type: "input",
        name: "managerName",
        message: "Enter manager name"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager email address"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter manager office number"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Enter engineer's name"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Enter engineer employee ID number" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer's email address"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Enter engineer's GitHub username"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Enter intern name"
      },

      {
        type: "input",
        name: "internId",
        message: "Enter intern employee ID" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Enter intern email address"
      },

      {
        type: "input",
        name: "internSchool",
        message: "Enter intern educational institution"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
});

};



function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync('team.html', generateTeam(teamArray), "UTF-8")

}

createTeam();

}

newTeam();





