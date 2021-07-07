DROP DATABASE burger_db;
CREATE DATABASE  burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(30) NOT NULL,
    devoured BOOLEAN,

);
