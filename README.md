# MyGlamm
web app for CRUD operations

In Angular2 project the rest api consumed is common http://localhost:8080/services/UserOperation with different http verbs.

In NodeJS We need to specify the mysql database connection credential in settings.js under config folder.
Four servies are created for http GET,POST,PUT and DELETE request. The services has been built with database name "test" and table name "EmployeeDetail".

Mysql DB script :

create DATABASE `test` /*!40100 DEFAULT CHARACTER SET latin1 */;

create table EmployeeDetail (
id int(5) auto_increment, 
name varchar(20), 
email varchar(50), 
contact varchar(10),
PRIMARY KEY (id));

