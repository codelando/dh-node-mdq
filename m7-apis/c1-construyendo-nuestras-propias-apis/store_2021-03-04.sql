# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.32)
# Base de datos: store
# Tiempo de Generación: 2021-03-04 13:23:04 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `name`)
VALUES
	(1,'Categoría 1'),
	(2,'Categoría 2'),
	(3,'Categoría 3'),
	(4,'Categoría 4'),
	(5,'Categoría 5'),
	(6,'Categoría 6'),
	(7,'Categoría 7'),
	(8,'Categoría 8'),
	(9,'Categoría 9'),
	(10,'Categoría 10');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `offer` tinyint(4) DEFAULT '0',
  `order` int(11) NOT NULL DEFAULT '0',
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_category_id` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `name`, `price`, `image`, `createdAt`, `deletedAt`, `updatedAt`, `offer`, `order`, `category_id`)
VALUES
	(1,'Reloj Casio Deportivo Ae-1300wh',5829,'81bb64ab-9566-4ae2-a227-974822aec8e4.jpeg',NULL,NULL,'2021-03-03 20:52:23',1,1,1),
	(2,'Casio Hombre Dw-291h',7220,'e46707dc-df5c-431f-8e86-e0583f215c43.jpeg',NULL,NULL,'2021-03-03 20:52:29',1,2,3),
	(3,'Casio W-59 W 59 W59',2770,'8e1f029f-b757-48bf-b533-43b5d0b52f02.jpeg',NULL,NULL,'2021-03-03 20:52:34',1,3,1),
	(4,'Casio A168wg Retro Vintage Gold',1000,'3f31e4ed-002e-4437-a4e0-c9324619ee84.jpeg',NULL,NULL,'2021-03-03 20:52:39',0,4,3),
	(14,'Product test',111111,'5e3e6948-c624-41a7-be28-db306c1f3b46.jpeg','2021-03-01 22:59:13',NULL,'2021-03-03 20:53:40',0,1,1),
	(15,'test',111,'721ae836-761e-4eed-a580-4b5be568b61e.jpeg','2021-03-01 23:00:34',NULL,'2021-03-03 20:53:55',0,1,1),
	(16,'test 2',111,'48195ba7-e3c7-4c11-a71a-ce40bf6ac2d8.jpeg','2021-03-01 23:02:02',NULL,'2021-03-03 20:53:14',0,1,1),
	(17,'dsadsa',11,'96f549a2-1d5d-4dbb-ab9a-bcfbac495482.','2021-03-03 12:25:35','2021-03-03 12:47:19','2021-03-03 12:25:35',0,11,1),
	(18,'dsads',11,'ca710101-4dc9-4bd4-8cc8-8af2086f454b.png','2021-03-03 12:26:20','2021-03-03 12:47:17','2021-03-03 12:46:53',0,111,2),
	(19,'dasdas1',11,'ca710101-4dc9-4bd4-8cc8-8af2086f454b.png','2021-03-03 12:47:39','2021-03-03 16:22:22','2021-03-03 16:22:20',0,11,2),
	(20,'dadsa',111,'2c926276-3c0b-485d-8b5e-3fbe1ce06192.jpeg','2021-03-03 18:16:17',NULL,'2021-03-03 20:53:25',0,111,4),
	(21,'dsadsa',11,'931addab-e6ab-4559-9c98-7545816a769f.jpeg','2021-03-03 18:20:21',NULL,'2021-03-03 20:52:53',0,1,1),
	(22,'Bla 2',1,'ea8bf96d-657b-4a49-88b4-064e6b1e0d0a.jpeg','2021-03-03 18:21:15',NULL,'2021-03-03 20:52:47',0,1,2);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla products_tags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products_tags`;

CREATE TABLE `products_tags` (
  `product_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  KEY `product_id` (`product_id`),
  KEY `category_id` (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `products_tags` WRITE;
/*!40000 ALTER TABLE `products_tags` DISABLE KEYS */;

INSERT INTO `products_tags` (`product_id`, `tag_id`)
VALUES
	(18,7),
	(18,8),
	(19,8),
	(19,9),
	(1,7),
	(1,8),
	(1,9);

/*!40000 ALTER TABLE `products_tags` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla SequelizeMeta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SequelizeMeta`;

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;

INSERT INTO `SequelizeMeta` (`name`)
VALUES
	('20210303235042-create-table-categories.js');

/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;

INSERT INTO `tags` (`id`, `name`)
VALUES
	(7,'Colores'),
	(8,'Clásico'),
	(9,'Sumergible'),
	(10,'Retro'),
	(11,'Moderno'),
	(12,'Calculadora');

/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `user`, `password`)
VALUES
	(1,'admin','$2a$10$G1eHffMVI3z/S8/ZJFcFbeI21opjHSQtVPTxpo4qWCNh94Kn2FW6.');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
