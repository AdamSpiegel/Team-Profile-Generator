const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")
const teamArray = []


// Team Manager Initial Questions
start()
function start() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is the team manager's id?",
            name: "id"
        },

        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officenumber"
        },

        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern", "Finished Building Team"]

        }
    ])
        .then(answers => {
            console.log(answers)
            const myManager = new Manager(answers.name, answers.id, answers.email, answers.officenumber)
            teamArray.push(myManager)
            switch (answers.role) {
                case "Engineer":
                    return getEngineer()
                case "Intern":
                    return getIntern()
                case "Finished Building Team":
                    return finished()
            }
        })
}
// Questions to prompt if Engineer is selected to add to team
function getEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is the team engineer's id?",
            name: "id"
        },

        {
            type: "input",
            message: "What is the team engineer's email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is the engineer's Github username?",
            name: "github"
        },

        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern", "Finished Building Team"]

        }

    ])
        .then(answers => {
            console.log(answers)
            const myEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamArray.push(myEngineer)
            switch (answers.role) {
                case "Engineer":
                    return getEngineer()
                case "Intern":
                    return getIntern()
                case "Finished Building Team":
                    return finished()
            }
        })
}
// Questions to prompt if Intern is selected to add to team
function getIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is the team intern's id?",
            name: "id"
        },

        {
            type: "input",
            message: "What is the team intern's email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
        },

        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern", "Finished Building Team"]

        }
    ])
        .then(answers => {
            console.log(answers)
            const myIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamArray.push(myIntern)
            switch (answers.role) {
                case "Engineer":
                    return getEngineer()
                case "Intern":
                    return getIntern()
                case "Finished Building Team":
                    return finished()
            }
        })
}

// Finalizes prompt questions with finished function and creates a writeToFile function 

function finished() {
    writeToFile('./dist/index.html', generatehtml(teamArray));
    console.log("finished")
    console.log(teamArray)
}

// Generates HTML to be displayed in output folder, dist. Need to still pull in user's entered data correctly.
function generatehtml(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- Bootstrap CSS File -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <!-- Font Awesome API -->
        <script src="https://kit.fontawesome.com/6b0ee879fc.js" crossorigin="anonymous"></script>
        <!-- Custom CSS Styling Sheet -->
        <link rel="stylesheet" href="style.css">
    
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron card text-white bg-danger mb-3">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">data.id</li>
            <li class="list-group-item">data.email</li>
            <li class="list-group-item">data.officenumber</li>
        </ul>
        </div>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">data.id</li>
        <li class="list-group-item">data.email</li>
        <li class="list-group-item">data.github</li>
    </ul>
    </div>   <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <p class="card-text"></p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">data.id</li>
    <li class="list-group-item">data.email</li>
    <li class="list-group-item">data.achool</li>
</ul>
</div>
        
                <!-- Bootstrap Bundle -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                    crossorigin="anonymous"></script>
    </body>
    
    </html>`
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created HTML!')
    );
}
