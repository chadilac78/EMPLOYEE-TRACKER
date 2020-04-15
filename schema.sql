DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

create table department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

create table roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
        REFERENCES department(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);

create table employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    CONSTRAINT fk_roles
    FOREIGN KEY (role_id)
        REFERENCES roles(id) ON DELETE SET NULL,
    manager_id INT,
    CONSTRAINT fk_manager
    FOREIGN KEY (manager_id)
        REFERENCES employees (id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);

USE employee_trackerdb;
INSERT INTO department (name) VALUES ('Character Development');
INSERT INTO department (name) VALUES ('Character Counsel');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Character Agent');

USE employee_trackerdb;
INSERT INTO roles (title, salary, department_id) VALUES ('Lead  Cartoon Actor', '100000', '1');
INSERT INTO roles (title, salary, department_id) VALUES ('Supporting Cartoon', '80000', '1');
INSERT INTO roles (title, salary, department_id) VALUES ('Cartoon Developer', '150000', '2');
INSERT INTO roles (title, salary, department_id) VALUES ('Cartoon Developer Assistant', '120000', '2');
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Counsel', '125000', '3');
INSERT INTO roles (title, salary, department_id) VALUES ('Legal Team assitant', '250000', '4');
INSERT INTO roles (title, salary, department_id) VALUES ('Lawyer', '190000', '4');

USE employee_trackerdb;
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jeremy', 'Henry', 3, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Mickey', 'Mouse', 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('David', 'Garza', 2, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Chad', 'Worthan', 4, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Dustin', 'Aldanez', 5, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Susana', 'Worthan', 6, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Fred', 'Flintsone', 7, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Barney', 'Rubble', 3, 3);
