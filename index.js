// templates pages
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//const html = require("./src/index.html");
// node
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

// writing and appending files to dist


// empty array used to hold team
let teamArray = [];
//empty array to hold html segments
const htmlArray = [];






function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose a job title?",
            choices: ["Employee","Engineer", "Intern", "Manager"],
            name: "addTeamMember"
        }
    ])
        .then(function (data) {

            switch (data.addTeamMember) {
                case "Employee":
                addEmployee();
                 break;
                
                 case "Engineer":
                 addEngineer();
                 break;

                 case "Intern":
                 addIntern();
                 break;

                 case "Manager":
                 addManager();
                 break;
            }
        });
}
function addEmployee() {
    inquirer.prompt([
        {
            message: "Please enter the employee's name",
            name: "name"
        },
        {
            message: "Please enter the employee's email address",
            name: "email"
        },
        {
            message: "Please enter the employee's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Employee(name, id, email, github)
            teamArray.push(teamMember)
            end()
        });

};

function addEngineer() {
    inquirer.prompt([
        {
            message: "Please enter the engineers name",
            name: "name"
        },
        {
            message: "Please enter the engineers email",
            name: "email"
        },
        {
            message: "Please enter the engineers github username",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamArray.push(teamMember)
            end()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "Please enter the intern's name",
            name: "name"
        },
        {
            message: "Please enter the intern's email address",
            name: "email"
        },
        {
            message: "Please enter the intern's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const school = data.github
            const teamMember = new Intern(name, id, email, github)
            teamArray.push(teamMember)
            end()
        });

};
function addManager() {
    inquirer.prompt([
        {
            message: "Please enter the Manager's name",
            name: "name"
        },
        {
            message: "Please enter the Manager's email address",
            name: "email"
        },
        {
            message: "Please enter the Manager's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Manager(name, id, email, github)
            teamArray.push(teamMember)
            end()
        });
};
function end() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes", "No I am done"],
            name: "ending switch"
        }
    ])

        .then(function (data) {

            switch (data.endData) {
                case "Yes":
                    addTeamMembers();
                    break;
                case "No, my team is complete":
                    compile();
                    break;
            }
        });
function compile() {
 

    
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="./src/style.css" />
    <title>Team Profile</title>
</head>

<body>

    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < teamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamArray[i].name}</h2>
                <h2>${teamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamArray[i].id}</p>
                <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a>></p>
        `
    
        }
        if (teamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></p>
            `
        }
        if (teamArray[i].school) {
            object += `
            <p>School: ${teamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dis/TeamGen.html`, htmlArray.join(""), function (err) {
        
    }) 
}    
    addTeamMembers()
