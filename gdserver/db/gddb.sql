-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: gddb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_addresses`
--

DROP TABLE IF EXISTS `t_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `district` varchar(20) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `default_address` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_addresses`
--

LOCK TABLES `t_addresses` WRITE;
/*!40000 ALTER TABLE `t_addresses` DISABLE KEYS */;
INSERT INTO `t_addresses` VALUES (1,1,'李玉刚','湖北省武汉市东西湖区','革新大道走马岭3号 武汉市玫隆皇冠食品有限公司','13545126358',1),(5,1,'陈莹','湖北省武汉市硚口区','长丰街道 长丰大道染料新村东风四队33附32号','18717172647',0);
/*!40000 ALTER TABLE `t_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_buyers`
--

DROP TABLE IF EXISTS `t_buyers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_buyers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_buyers`
--

LOCK TABLES `t_buyers` WRITE;
/*!40000 ALTER TABLE `t_buyers` DISABLE KEYS */;
INSERT INTO `t_buyers` VALUES (1,'oRjwc47rPjBxWgUyV8K-GLuc4fB4','小李菜刀',1);
/*!40000 ALTER TABLE `t_buyers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_cart`
--

DROP TABLE IF EXISTS `t_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL COMMENT '产品大类id',
  `tid` int(11) DEFAULT NULL,
  `buycount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_cart`
--

LOCK TABLES `t_cart` WRITE;
/*!40000 ALTER TABLE `t_cart` DISABLE KEYS */;
INSERT INTO `t_cart` VALUES (13,1,1,0,1);
/*!40000 ALTER TABLE `t_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_categories`
--

DROP TABLE IF EXISTS `t_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `cate_level` tinyint(4) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_categories`
--

LOCK TABLES `t_categories` WRITE;
/*!40000 ALTER TABLE `t_categories` DISABLE KEYS */;
INSERT INTO `t_categories` VALUES (1,'地坪设备',1,0),(2,'金刚工具',1,0),(3,'配件工具',1,0),(4,'机械配件',1,0),(5,'五金工具',1,0),(6,'清洁工具',1,0),(7,'电工工具',1,0),(8,'地坪工具耗材',1,0),(9,'研磨机',2,1),(10,'打磨机',2,1),(11,'抹光机',2,1),(12,'铲削机',2,1),(13,'抛光机',2,1),(14,'翻新机',2,1),(15,'洗地机',2,1),(16,'吸水机',2,1),(17,'吸尘器',2,1),(18,'铣刨机',2,1),(19,'升降机',2,1),(20,'一体机',2,1),(21,'扇形刀头',2,2),(22,'箭齿刀头',2,2),(23,'金刚磨头',2,2),(24,'金刚头',2,2),(25,'磨片磨石',2,2),(26,'切割片',2,2),(27,'抛光片',2,2),(28,'PCD刀头',2,2),(29,'铣刨机总成',2,2),(30,'插头插座',2,3),(31,'吸水机配件',2,3),(32,'其他配件',2,3);
/*!40000 ALTER TABLE `t_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_comments`
--

DROP TABLE IF EXISTS `t_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `custom_avatar` varchar(255) DEFAULT NULL,
  `custom_name` varchar(255) DEFAULT NULL,
  `rate` tinyint(4) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_comments`
--

LOCK TABLES `t_comments` WRITE;
/*!40000 ALTER TABLE `t_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_product_comment`
--

DROP TABLE IF EXISTS `t_product_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_product_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `content` text NOT NULL,
  `rate` tinyint(4) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_comment`
--

LOCK TABLES `t_product_comment` WRITE;
/*!40000 ALTER TABLE `t_product_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_product_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_product_detail`
--

DROP TABLE IF EXISTS `t_product_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_product_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  `desc_imgs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `sepcs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_detail`
--

LOCK TABLES `t_product_detail` WRITE;
/*!40000 ALTER TABLE `t_product_detail` DISABLE KEYS */;
INSERT INTO `t_product_detail` VALUES (1,1,'detail/video/111.mp4','detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:380V单盘研磨机,总重量:86KG,研磨削幅:380mm*380mm,定格:3.0KW*4P/50或60Hz,电压:380V三相交流,电源线:2*4'),(2,2,'detail/video/222.mp4','detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:220V单盘研磨机,总重量:80KG,研磨削幅:380mm*380mm,定格:3.0KW*4P/50或60Hz,电压:380V三相交流,电源线:2*4'),(3,4,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:YCIL300,mm总重量:114KG,工作宽度:300mm,电机:4KW,电压:380V三相交流,输出功率:1.1KW,工作转速:800rpm,集尘罐溶剂:17L'),(4,5,'','detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:广地350,尺寸:1200mm*400mm*980mm,把手全长:800mm,mm总重量:110KG,工作宽度:380mm*380mm,工作转速:800rpm,定格:4.0KW*4P/50或60Hz,电压:380V三相交流,电源线:4.0mm/2*3'),(5,6,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg',NULL);
/*!40000 ALTER TABLE `t_product_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_product_type`
--

DROP TABLE IF EXISTS `t_product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(7,2) DEFAULT NULL,
  `origin_price` decimal(7,2) DEFAULT NULL,
  `focus_imgs` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `sold_count` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_type`
--

LOCK TABLES `t_product_type` WRITE;
/*!40000 ALTER TABLE `t_product_type` DISABLE KEYS */;
INSERT INTO `t_product_type` VALUES (1,1,'380V单盘研磨机',18000.99,19999.00,'detail/d111_1.png,detail/d111_2.png,detail/d111_3.png',100,'86KG',0),(2,2,'220V单盘研磨机',16000.00,NULL,'detail/d112_1.png,detail/d112_2.png,detail/d112_3.png',50,'70KG',10),(5,1,'380V单盘研磨机2',19000.99,19999.00,'detail/d111_1.png,detail/d111_2.png,detail/d111_3.png',20,'86KG',1),(6,2,'220V单盘研磨机2',15000.00,NULL,'detail/d112_1.png,detail/d112_2.png,detail/d112_3.png',33,'70KG',2),(7,4,'YCIL300',9999.99,NULL,'detail/d121_1.png,detail/d121_2.png,detail/d121_3.png',100,'114KG',0),(8,5,'广地350单盘自吸尘研磨机',9999.99,NULL,'detail/d113_1.png,detail/d113_2.png,detail/d113_3.png',100,'110KG',0);
/*!40000 ALTER TABLE `t_product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_products`
--

DROP TABLE IF EXISTS `t_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `focus_imgs` varchar(255) DEFAULT NULL,
  `tag` varchar(10) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_products`
--

LOCK TABLES `t_products` WRITE;
/*!40000 ALTER TABLE `t_products` DISABLE KEYS */;
INSERT INTO `t_products` VALUES (1,'广地380V单盘研磨机',9,'111_1.png,111_2.png,111_3.png','特价','2020-11-20 03:17:55'),(2,'广地220V单盘研磨机',9,'112_1.png,112_2.png,112_3.png','','2020-11-21 02:18:43'),(3,'三条扇形金刚石磨块(三刀头)',21,NULL,NULL,'2020-11-21 02:51:59'),(4,'广地300吸尘打磨机',10,'121_1.png,121_2.png,121_3.png','','2020-11-21 03:14:25'),(5,'广地350单盘自吸尘研磨机',9,'113_1.png,113_2.png,113_3.png',NULL,'2020-12-24 08:01:56');
/*!40000 ALTER TABLE `t_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_users`
--

DROP TABLE IF EXISTS `t_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_users`
--

LOCK TABLES `t_users` WRITE;
/*!40000 ALTER TABLE `t_users` DISABLE KEYS */;
INSERT INTO `t_users` VALUES (1,'admin','$2b$10$QkFjZZK5hopzbXSfFQaGC.MMCsw01KhfPOwlStLkiHr9B8nfc//f.','13545126358','23801504@qq.com','http://abc.com/123.png','2020-10-22 13:47:49');
/*!40000 ALTER TABLE `t_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `v_products`
--

DROP TABLE IF EXISTS `v_products`;
/*!50001 DROP VIEW IF EXISTS `v_products`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_products` AS SELECT 
 1 AS `id`,
 1 AS `category`,
 1 AS `name`,
 1 AS `focus_imgs`,
 1 AS `tag`,
 1 AS `video`,
 1 AS `desc_imgs`,
 1 AS `sepcs`,
 1 AS `total_sold_count`,
 1 AS `min_price`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `v_products`
--

/*!50001 DROP VIEW IF EXISTS `v_products`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_products` AS select `p`.`id` AS `id`,`p`.`category` AS `category`,`p`.`name` AS `name`,`p`.`focus_imgs` AS `focus_imgs`,`p`.`tag` AS `tag`,`d`.`video` AS `video`,`d`.`desc_imgs` AS `desc_imgs`,`d`.`sepcs` AS `sepcs`,`sold`.`total_sold_count` AS `total_sold_count`,`sold`.`min_price` AS `min_price` from ((`t_products` `p` join `t_product_detail` `d` on((`p`.`id` = `d`.`pid`))) join (select `t_product_type`.`pid` AS `pid`,sum(`t_product_type`.`sold_count`) AS `total_sold_count`,min(`t_product_type`.`price`) AS `min_price` from `t_product_type` group by `t_product_type`.`pid`) `sold` on((`p`.`id` = `sold`.`pid`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-25 17:21:06
