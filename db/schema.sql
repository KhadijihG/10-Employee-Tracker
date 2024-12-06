DROP DATABASE if exists Employee_database;

CREATE DATABASE Employee_database;

\c Employee_database;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    constraint fk_department foreign KEY (department_id) references department(id) on delete cascade
);