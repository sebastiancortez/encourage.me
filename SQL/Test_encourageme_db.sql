DROP DATABASE IF EXISTS `encourage_me`;
CREATE DATABASE `encourage_me`;
USE `encourage_me`;

SET NAMES utf8;
SET character_set_client = utf8mb4;

CREATE TABLE `user` (
	`user_id` TINYINT(4) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `user` VALUES (1,'Sebastian');

CREATE TABLE `messages` (
	`message_id` TINYINT(4) NOT NULL AUTO_INCREMENT,
    `message` varchar(150) NOT NULL,
    PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `messages` VALUES (1,'Lets go bro');
INSERT INTO `messages` VALUES (2,'You are doing amazing');
