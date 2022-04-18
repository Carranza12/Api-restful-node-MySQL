# API-REST Empleados CRUD -NodeJs-MySQL
Hola, esta es una aplicacion con el marco de trabajo de Express con node js y en la base de datos usando MySQL, es un CRUD con las operaciones basicas para guardar registros en la base de datos, a lo largo de la documentacion probaremos la app con Postman.
<br>
<br>

# Configuracion del entorno de trabajo
Para poder ejecutar este proyecto es necesario tener instalado:<br><br>
- MySQL - guia de instalacion: http://gieta.etsisi.upm.es/wp-content/uploads/2020/02/GuiaInstalacion_MySql_Community_8.0.19.pdf <br>
- Node js - Link de descarga: https://nodejs.org/es/ <br>
# Requisitos del proyecto: <br>
- MySQL 8.0 <br>
- Node js <br>
- Postman <br>
# Configura la Base de datos
Es necesario tener una base de datos con el nombre de "company" , despues ejecutar los scripts del archivo "employees.sql".
```
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

```
<br><br>

# Instala las dependecias de Node js para el proyecto
Necesitas ubicarte en la carpeta raiz y ejecutar el siguiente comando:
```
$ npm i

```
# Ejecuta el servidor local
una vez ya instalado todo lo necesario y ya clonado el proyecto ejecuta el servidor con el siguiente comando:
```
$ npm run dev
```

# Probando API con POSTMAN
a continuacion probaremos todos los metodos HTTP de nuestra API.

# GET: Listar todos los empleados
![Listar todos los empleados](https://github.com/Carranza12/Api-restful-node-MySQL/blob/master/photos%20github/get%20employees.PNG)

# GET: listar un empleado por su id
![Listar un cliente](https://github.com/Carranza12/Api-restful-node-MySQL/blob/master/photos%20github/get%20employee.PNG)
# POST: Guardar un empleado
![guardar un empleado](https://github.com/Carranza12/Api-restful-node-MySQL/blob/master/photos%20github/post%20employee.PNG)
# PUT: Actualizar los datos de un empleado
![actualizar un cliente](https://github.com/Carranza12/Api-restful-node-MySQL/blob/master/photos%20github/put%20employee.PNG)
# DELETE: Eliminar un empleado de la BD
![eliminar un cliente](https://github.com/Carranza12/Api-restful-node-MySQL/blob/master/photos%20github/delete%20employee.PNG)