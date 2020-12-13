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
INSERT INTO `t_addresses` VALUES (1,1,'李玉刚','湖北省武汉市硚口区','易家街道 长丰大道染料新村东风四队33附32号','13545126358',1),(5,1,'陈莹','湖北省武汉市硚口区','长丰街道 长丰大道染料新村东风四队33附32号','18717172647',0);
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
  `product` int(11) DEFAULT NULL,
  `buycount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_cart`
--

LOCK TABLES `t_cart` WRITE;
/*!40000 ALTER TABLE `t_cart` DISABLE KEYS */;
INSERT INTO `t_cart` VALUES (13,1,3,1),(17,1,4,1);
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
  `desc_imgs` varchar(255) DEFAULT NULL,
  `sepcs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_detail`
--

LOCK TABLES `t_product_detail` WRITE;
/*!40000 ALTER TABLE `t_product_detail` DISABLE KEYS */;
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
  `img` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_type`
--

LOCK TABLES `t_product_type` WRITE;
/*!40000 ALTER TABLE `t_product_type` DISABLE KEYS */;
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
  `description` varchar(255) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `parameters` varchar(255) DEFAULT NULL,
  `features` text,
  `introduce` text,
  `small_img` varchar(255) DEFAULT NULL,
  `focus_imgs` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tag` varchar(10) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_products`
--

LOCK TABLES `t_products` WRITE;
/*!40000 ALTER TABLE `t_products` DISABLE KEYS */;
INSERT INTO `t_products` VALUES (1,'广地380V单盘研磨机',NULL,9,'型号:380V单盘机,长×宽×高:1020mm×590mm×870mm,mm总重量:86KG,研磨削幅:380mm×380mm,定格:3.0KW*4P 50或60Hz,电压:380V三相交流,电源线:2*4','研磨机采用全钢制作，外型美观，主要用于硬水泥，水磨石地板等大范围地面粗效打磨，高效研磨处理.','','111_1.png','111_1.png,111_2.png,111_3.png','特价','2020-11-20 03:17:55'),(2,'广地220V单盘研磨机',NULL,9,'型号:220V单盘机, 长×宽×高:1020mm×590mm×870mm, mm总重量:86KG,研磨削幅:380mm×380mm','研磨机采用全钢制作，外型美观，主要用于硬水泥，水磨石地板等大范围地面粗效打磨，高效研磨处理.\r\n',NULL,'121_1.png','121_1.png,121_2.png,121_3.png','','2020-11-21 02:18:43'),(3,'三条扇形金刚石磨块(三刀头)',NULL,21,NULL,'混凝土地面，金刚石磨块使得翻新的过程具有效率高、磨削力强、不易崩边、寿命长等优点，适合各种大型翻新机的使用。',NULL,'211_1.png','211_1.png,211_2.png',NULL,'2020-11-21 02:51:59'),(4,'广地300吸尘打磨机',NULL,10,NULL,'1，具备研磨/吸尘一体化，做到无尘操作，另配有吸尘电机，在施工过程中不会扬尘，操作简单，轻便，是环氧施工的最佳选择。\r\n2，机身小巧，扶手可以调整，运输方便。配备不同粗细的金钢石刀具，可实现各类地坪的研磨，如硬化耐磨、水磨石、金钢砂地面以及各类混凝土地面。\r\n3，精磨刀具可针对地坪表面进行精磨处理，另可对环氧地坪中间层进行找平处理。\r\n4，可自调节设备高度，始终保证机械在水平状态下工作。\r\n5，高效节能的动力系统，紧凑，精良的制造工艺。\r\n6，可自由更换底盘，耗材可以自由配置（金刚石，砂轮片）。\r\n7，带有倒顺开头，只需拨动开关即可改变电机旋转方向。','本产品为本公司自主研发设计的实用新型专利产品，涉及地面平整施工领域，特别是一种适用于混凝土环氧树脂耐磨地面，硬化地坪的平整度恢复，表面打毛，抛光处理，旧环氧翻新处理。本产品适用于新地面平整度的恢复，表面打毛，旧地面如薄涂型环氧，胶水，油漆的去除，环氧砂浆层的细打磨及抹平。市面上的研磨机在操作过程中灰尘较大，施工环境恶劣，影响操作人员的身体健康，面且现有的手柄均为固定结构，不能根据操作者的身高进行调节，这增加了施工劳动强度，现有的磨盘磨损后，可能造成磨盘只能一侧与地面接触导致整个设备抖动，直接更换磨盘损耗较大。','112_1.png',NULL,'新品','2020-11-21 03:14:25');
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-13 17:08:58
