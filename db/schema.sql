CREATE DATABASE burger_db;

USE burger_db;



CREATE TABLE burgers (
id INTEGER(3) auto_increment not null,
burger VARCHAR(60) not null,
devoured BOOLEAN,

PRIMARY KEY (id)
);