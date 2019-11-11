CREATE DATABASE bankofandrew;
USE bankofandrew;

CREATE TABLE account(
	id INT AUTO_INCREMENT NOT NULL,
    balance INT(10) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO account (balance)
VALUES("500.00");
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Slark98';
