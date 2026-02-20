-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               12.0.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for beachbarbershop
CREATE DATABASE IF NOT EXISTS `beachbarbershop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `beachbarbershop`;

-- Dumping structure for table beachbarbershop.borbelyok
CREATE TABLE IF NOT EXISTS `borbelyok` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nev` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `teleszam` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table beachbarbershop.felhasznalok
CREATE TABLE IF NOT EXISTS `felhasznalok` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `felhnev` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `hash` char(72) NOT NULL DEFAULT '0',
  `telefonszam` varchar(50) NOT NULL DEFAULT '0',
  `role` enum('ADMIN','BARBER','USER') NOT NULL DEFAULT 'USER',
  `emailVerified` tinyint(1) NOT NULL DEFAULT 0,
  `verifyToken` varchar(128) DEFAULT NULL,
  `verifyTokenExpiry` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table beachbarbershop.idopont
CREATE TABLE IF NOT EXISTS `idopont` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `felhaszid` int(10) unsigned NOT NULL,
  `idopont` datetime NOT NULL,
  `szolgal` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idopont_felhaszid_fkey` (`felhaszid`),
  CONSTRAINT `FK_idopont_felhasznalok` FOREIGN KEY (`felhaszid`) REFERENCES `felhasznalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idopont_felhaszid_fkey` FOREIGN KEY (`felhaszid`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=448 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table beachbarbershop.rendeles
CREATE TABLE IF NOT EXISTS `rendeles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `felhaszid` int(10) unsigned NOT NULL,
  `products` longtext NOT NULL,
  `shippingType` varchar(20) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `address` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_rendeles_felhasznalok` (`felhaszid`),
  CONSTRAINT `rendeles_felhaszid_fkey` FOREIGN KEY (`felhaszid`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
