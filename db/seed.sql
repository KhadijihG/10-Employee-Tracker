\c employee_database

INSERT INTO department (name) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role 
(title, salary, department_id) VALUES
('Sales Manager', 80000, 1),
('Engineering Manager', 150000, 2),
('Finance Manager', 100000, 3),
('Legal Manager', 120000, 4),
('Sales Employee', 65000, 1),
('Engineering Employee', 100000, 2),
('Finance Employee', 90000, 3),
('Legal Employee', 100000, 4);


INSERT INTO employee 
(first_name, last_name, role_id, manager_id) VALUES
('Linda', 'Smith', 1, NULL),
('Rodney', 'Johnson', 2, NULL),
('Harry', 'Potter', 3, NULL),
('Noah', 'Peaterson', 4, NULL);
