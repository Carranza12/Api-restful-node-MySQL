CREATE DATABASE company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);
INSERT INTO employees VALUES 
(1,'Juan Carmona',2200),
(2,'Alexis Hernandez',2500),
(3,'Alejandro Valenzuela',4670);


SELECT * FROM company.employees;