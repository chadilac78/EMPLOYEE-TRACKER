const inquirer = require('inquirer');
const mysql = require('mysql');
var util = require('util');

var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,


    user: "root",


    password: "Hornet#9476",
    database: "employee_trackerdb"
});
connection.connect(function (err) {
    if (err) throw err;
    start();
});


var starting_prompts = [{
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["Add an employee", "Add a department", "Add a role", "View Departments", "View Roles",
        "View Employees", "Update an Employees Roles", "Nothing, Im done."]
}

]

var newEmployeePrompts = [
    {
        type: "input",
        name: "employee_id",
        message: "Enter new employees id number:"
    },
    {
        type: "input",
        name: "first_name",
        message: "Enter new employee first name:"
    },
    {
        type: "input",
        name: "last_name",
        message: "Enter new employee last name: "
    },
    {
        type: "input",
        name: "role_id",
        message: "Enter new employees role id: "
    },
    {
        type: "input",
        name: "managers_id",
        message: "Enter the new employees managers id : "
    }
];

var newDepartmentPrompts = [
    {
        type: "input",
        name: "department_id",
        message: "Enter new departments id number:"
    },
    {
        type: "input",
        name: "departments_name",
        message: "Enter new department name: "
    }
];

var addRolePrompts = [
    {
        type: "input",
        name: "role_id",
        message: "Enter new roles id number:"
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title for the new role: "
    },
    {
        type: "input",
        name: "salary",
        message: "Enter the salary for the new role: "
    },
    {
        type: "input",
        name: "department_id",
        message: "Enter the department ID for the new role: "
    }
];

function start() {
    inquirer.prompt(starting_prompts)
        .then(function (answer) {
            if (answer.action === "Add an employee") {
                addEmployees();
            }
            if (answer.action === "Add a department") {
                addDepartment();
            }
            if (answer.action === "Add a role") {
                addRole();
            }
            if (answer.action === "View Departments") {
                viewDepartments();
            }
            if (answer.action === "View Employees") {
                viewEmployees();
            }
            if (answer.action === "View Roles") {
                viewRoles();
            }
            if (answer.action === "Update an Employees role") {
                addEmployees();
            }
            if (answer.action === "Nothing, Im done.") {
                console.log("Thanks for using the employee tracker");
                start();
            }
        })

}

function addEmployees() {
    inquirer.prompt(newEmployeePrompts)
        .then(function (data) {
            connection.query("INSERT INTO employees SET ?",
                {
                    id: data.employee_id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    role_id: data.role_id,
                    manager_id: data.managers_id
                })

        })

}

function addDepartment() {
    inquirer.prompt(newDepartmentPrompts)
        .then(function (data) {
            connection.query("INSERT INTO department SET ?",
                {
                    id: data.department_id,
                    dept_name: data.departments_name,

                })

        })

}

function addRole() {
    inquirer.prompt(addRolePrompts)
        .then(function (data) {
            connection.query("INSERT INTO roles SET ?",
                {
                    id: data.role_id,
                    title: data.title,
                    salary: data.salary,
                    department_id: data.department_id


                })

        })

}

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err; {
            console.table(results);
        }
    });
}

function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, results) {
        if (err) throw err;
        {
            console.table(results);
        }
    });
}

function viewRoles() {
    connection.query("SELECT * FROM roles", function (err, results) {
        if (err) throw err; {
            console.table(results);
        }
    });
}












