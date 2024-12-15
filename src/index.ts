// import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';
import inquirer from 'inquirer';

await connectToDb();

function promptQuestions() {


    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Select an option',
                name: 'option',
                choices: ['view departments', 'view employees', 'add employee', 'exit'],
            }
        ])
        .then((answer: any) => {
            if (answer.option === 'view departments') {
                viewDepartments()
            } else if (answer.option === 'view employees') {
                viewEmployees()
            } else if (answer.option === 'add employee') {
                addEmployee()
            } else if (answer.option === 'exit') {
                process.exit()
            }
        })
        .catch((error: any) => {
            console.log(error);

        });
}
function viewDepartments() {
    pool.query('select * from department').then(({ rows }) => {
        console.table(rows);

    }).then(() => promptQuestions())
}
function viewEmployees() {
    pool.query('select * from employee').then(({ rows }) => {
        console.table(rows);

    }).then(() => promptQuestions())
}
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'what is the employees first name?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'what is the employees last name?',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'what is the employees role id?',
            name: 'roleId'
        },
        {
            type: 'input',
            message: 'who is the employees manager?',
            name: 'managerId'
        }
    ]).then((answers) => {
        const { firstName, lastName, roleId, managerId } = answers
        pool.query('insert into employee (first_name, last_name, role_id, manager_id) values ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId])
            .then(() => promptQuestions())
    })
}
promptQuestions()