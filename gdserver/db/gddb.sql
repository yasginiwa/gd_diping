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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_cart`
--

LOCK TABLES `t_cart` WRITE;
/*!40000 ALTER TABLE `t_cart` DISABLE KEYS */;
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
  `sepcs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_detail`
--

LOCK TABLES `t_product_detail` WRITE;
/*!40000 ALTER TABLE `t_product_detail` DISABLE KEYS */;
INSERT INTO `t_product_detail` VALUES (1,1,'detail/video/111.mp4','detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:380V单盘研磨机,总重量:86KG,研磨削幅:380mm*380mm,定格:3.0KW*4P/50或60Hz,电压:380V三相交流,电源线:2*4'),(2,2,'detail/video/222.mp4','detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:220V单盘研磨机,总重量:80KG,研磨削幅:380mm*380mm,定格:3.0KW*4P/50或60Hz,电压:380V三相交流,电源线:2*4'),(3,4,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:YCIL300,mm总重量:114KG,工作宽度:300mm,电机:4KW,电压:380V三相交流,输出功率:1.1KW,工作转速:800rpm,集尘罐溶剂:17L'),(4,5,'','detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:广地350,尺寸:1200mm*400mm*980mm,把手全长:800mm,mm总重量:110KG,工作宽度:380mm*380mm,工作转速:800rpm,定格:4.0KW*4P/50或60Hz,电压:380V三相交流,电源线:4.0mm/2*3'),(5,6,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','设备型号:广地330(鼓风机),鼓风机功率:750W,总重量:140KG,工作宽度:400mm,电机功率:4KW'),(6,7,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','电压:380V,电机:4KW,电机转速:1450rpm,机身重量:120KG,工作宽度:380mm*600mm,特性:1.高效化\r\n设备紧凑，施工不受场地限制，可连续二十四小时工作，是单头自吸尘的两位效益。\r\n2.功能化\r\n配备多种类型金钢石刀具，可实现对硬质，松软地面找平，拉毛，环氧砂桨中间层的找平处理，又可对环氧水磨石表面精磨，薄型油漆，环氧等地面进行拉毛去除处理。\r\n3.环保型\r\n进口吸尘电机，研磨吸尘同步工作，实现二十四小时连续无尘环保施工。'),(7,8,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,设备型号:GD2-650/GD2-600,电压:380V,电机功率:7.5KW/4KW,转速:900rpm/800rpm,机身重量:185KG/175KG,工作宽度:380mm*650mm/350mm*600mm,风机功率:1KW/2KW,特性:1.高效化\r\n设备紧凑，施工不受场地限制，可连续二十四小时工作，是单头自吸尘的两位效益。\r\n2.功能化\r\n配备多种类型金钢石刀具，可实现对硬质，松软地面找平，拉毛，环氧砂桨中间层的找平处理，又可对环氧水磨石表面精磨，薄型油漆，环氧等地面进行拉毛去除处理。\r\n3.环保型\r\n进口吸尘电机，研磨吸尘同步工作，实现二十四小时连续无尘环保施工。'),(9,9,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,设备型号:FQ-100,发动机:BS-750,功率:5.5HP,工作转速:60~140rpm,底盘直径:100mm(24inch),工作宽度:100mm(24inch),刀片尺寸:230mm*120mm,刀片可调角度:15°,离合器:自动离心离合器,特性:1.独立转动的飞轮，可以在狭窄的角落作业\r\n2.可折叠式把手易于运输和储藏\r\n3.吊钩是该产品的标准件\r\n4.位于上部的齿轮盒保证了使用寿命\r\n5.重型设计保证了磨光效果\r\n6.把手高度可以调节，保证了操作的舒适型，易于控制\r\n7.离心保险开关在机器失控的情况下关闭发动机'),(10,10,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,整机尺寸:970mm*460mm*1160mm,手柄收缩时尺寸:675mm*460mm*640mm,总重量:76KG(机体66KG+配重箱10KG),铲削宽度:280mm(标准刀宽度),刀刃震动频率:1900次/分,电机功率:1KW(单向电机),电压:220V,电源线长度:10m,铲削宽度:280mm铲3mm厚度以上的\\140mm强力刀，铲3mm以下的,铲削角度:25°-44°,铲削刀片的厚度:3mm,铲削刀片材质:进口弹簧钢,刀片硬度:61,特性:铲削时不会跳刀。搬运方便，可拆卸。'),(11,11,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,功率:7.5KW,转速:1800rpm,电压:三相380V,总重量:190KG,特性:1、自动式平衡，操作平稳，可以不同地板研磨，机械平衡性能优越。\r\n2、本机智能型调整速度、可根据不同地面，调整机械速度研磨，故障排除可增加使用效果及方便性\r\n3、工作直径70CM 一机多用，搬运方便，操作轻松，外形美观\r\n4、磨片多样化,可根据地板选择磨片。\r\n5、控制面板操作更加方便灵活，美观大方。\r\n6、可用于清洁，细磨，抛光等功能。,操作说明:1、将机械从包装箱中取出，平放地面\r\n2、底盘翘起后，露出底盘，根据地面情况使用树脂磨垫或普通，将磨垫安装在大盘即可\r\n4、将机械平放，插上电源，旋转开关启动机械，再调到需要的转速，此时便可正常运转。\r\n5、机械开动后，可根据地面强度和处理效果选择合适的速度匀速推进。\r\n6、在操作中，有任何异常现象请立即停止机械，检查完毕方可重新使用。'),(12,12,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,型号:630/640型,功率:10HP/11HP,工作宽度:630mm*630mm/640mm*640mm,电压:三相交流380V,变频器功率:7.5KW/11KW,电机功率:7.5KW/7.5KW,转速:1500RPM/1800RPM,磨头:12个,水箱:20L/70L,使用范围:混凝土地面研磨抛光，石材地面研磨抛光，新旧环氧地坪打磨，混凝土密封固化剂地坪研磨抛光及各类艺术地坪,特性:1、外观设计新颖、美观大方。\r\n2、折叠式手柄，集成式中央控制面板设计，操作便捷，安全可靠，符合人体工程学，手柄移动方便。\r\n3、大功率9kw（12HP）变频电机，满足工业地坪研磨的长时间频繁使用要求。\r\n4、自动压力调节控制系统，满足不同施工工艺需求。\r\n5、可配备吸尘装备，实现干、湿两种工作模式。\r\n6多功能磨盘可安装各类研磨耗材，尽可能降低您的施工成本,安全须知:1、操作人员须穿戴防水绝缘工作鞋\r\n2、使用前请将机械电源与配电箱连接，确保配电箱里有漏电保护和过载保护\r\n3、请检查好电源线是否有破损、老化、若有请立即更换\r\n4、电源线最好选用国标线，保证电源长度不超过100M\r\n5、严禁机械压起转动'),(13,13,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,直径:17英寸,电压:220V,电源线:15m,转速:175rpm,功率:2.5P,加重铁重量:10KG,设备简介:石材翻新机采用全齿轮传动，齿轮箱采用纯铝铸造而成，并配有大功率德国西门子电机，不仅重量轻，面且动力强劲，大大提高了机器的使用寿命和可靠性。四磨头对转运行方式，提高机械的操作平稳度及灵活度。机械打磨宽度可达600MM。选配不同磨盘，可一次性安装12个磨片。机械配备吸尘装置，可用于干/湿两种打磨方式。多功能磨盘可安装各类研磨耗材，尽可能降低您的施工成本,产品功能:MD-12石材翻新机集研磨，抛光，晶面，清洗等多功能于一体。可用于混凝土表面，天然石材表面，水磨石地面，木地板等多种材质表面。'),(14,14,NULL,'detail/desc/desc111_1.jpg,detail/desc/desc111_2.jpg,detail/desc/desc111_3.jpg,detail/desc/desc111_4.jpg,detail/desc/desc111_5.jpg,detail/desc/desc111_6.jpg,detail/desc/desc111_7.jpg,detail/desc/desc111_8.jpg,detail/desc/desc111_9.jpg,detail/desc/desc111_10.jpg,detail/desc/desc111_11.jpg,detail/desc/desc111_12.jpg,detail/desc/desc111_13.jpg,detail/desc/desc111_14.jpg,detail/desc/desc111_15.jpg','品牌:广地,电压:交流220V,特性:特大功率电机，配置的加重铁，可随意装卸，长时间使用动力强劲。一机多用，集地面、地毯清洗、地面晶面处理、大理石翻新及楼梯清洗于一体。操作灵活，简便');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product_type`
--

LOCK TABLES `t_product_type` WRITE;
/*!40000 ALTER TABLE `t_product_type` DISABLE KEYS */;
INSERT INTO `t_product_type` VALUES (1,1,'380V单盘研磨机',18000.99,19999.00,'detail/d111_1.png,detail/d111_2.png,detail/d111_3.png',100,'86KG',0),(2,2,'220V单盘研磨机',16000.00,NULL,'detail/d112_1.png,detail/d112_2.png,detail/d112_3.png',50,'70KG',10),(7,4,'YCIL300',9999.99,NULL,'detail/d121_1.png,detail/d121_2.png,detail/d121_3.png',100,'114KG',0),(8,5,'广地350单盘自吸尘研磨机',9999.99,NULL,'detail/d113_1.png,detail/d113_2.png,detail/d113_3.png',100,'110KG',0),(9,6,'广地330(鼓风机)',0.99,NULL,'detail/d122_1.png,detail/d122_2.png,detail/d122_3.png',100,'140KG',0),(10,7,'广地双盘打磨机',0.99,NULL,'detail/d123_1.png,detail/d123_2.png,detail/d123_3.png',100,'120KG',0),(11,8,'GD2-650',1.99,NULL,'detail/d124_1.png,detail/d124_2.png,detail/d124_3.png',100,'185KG',1),(12,8,'GD2-600',0.99,NULL,'detail/d124_2_1.png,detail/d124_2_2.png,detail/d124_2_3.png',99,'175KG',0),(13,9,'FQ-100',0.99,NULL,'detail/d131_1.png',99,NULL,0),(14,10,'广地削铲机',0.99,NULL,'detail/d141_1.png,detail/d141_2.png',99,NULL,0),(15,11,'700型',0.99,NULL,'detail/d151_1.png,detail/d151_2.png',100,'190KG',0),(16,12,'630型',1.99,NULL,'detail/d152_1.png,detail/d152_2.png',100,'290KG',10),(17,12,'640型',2.99,NULL,'detail/d152_2_1.png,detail/d152_2_2.png',100,'260KG~340KG',0),(18,13,'地坪加重翻新机',0.99,NULL,'detail/d161_1.png,detail/d161_2.png,detail/d161_3.png,detail/d161_4.png',100,NULL,1),(19,14,'地坪翻新机',1.99,NULL,'detail/d162_1.png,detail/d162_2.png',99,NULL,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_products`
--

LOCK TABLES `t_products` WRITE;
/*!40000 ALTER TABLE `t_products` DISABLE KEYS */;
INSERT INTO `t_products` VALUES (1,'广地380V单盘研磨机',9,'111_1.png,111_2.png,111_3.png','特价','2020-11-20 03:17:55'),(2,'广地220V单盘研磨机',9,'112_1.png,112_2.png,112_3.png','','2020-11-21 02:18:43'),(3,'三条扇形金刚石磨块(三刀头)',21,NULL,NULL,'2020-11-21 02:51:59'),(4,'广地300吸尘打磨机',10,'121_1.png,121_2.png,121_3.png','','2020-11-21 03:14:25'),(5,'广地350单盘自吸尘研磨机',9,'113_1.png,113_2.png,113_3.png',NULL,'2020-12-24 08:01:56'),(6,'无尘打磨机(鼓风机)',10,'122_1.png,122_2.png,122_3.png',NULL,'2020-12-26 13:35:40'),(7,'广地双盘打磨机',10,'123_1.png,123_2.png,123_3.png',NULL,'2020-12-28 06:46:37'),(8,'广地双盘吸尘打磨机',10,'124_1.png,124_2.png,124_3.png,124_2_1.png,124_2_2.png,124_2_3.png',NULL,'2020-12-28 08:51:19'),(9,'FQ-100抹光机',11,'131_1.png',NULL,'2020-12-29 03:31:09'),(10,'广地削铲机',12,'141_1.png,141_2.png',NULL,'2020-12-29 04:54:41'),(11,'D-015广地27寸高速抛光机',13,'151_1.png,151_2.png',NULL,'2020-12-29 09:12:31'),(12,'广地12头研磨抛光机',13,'152_1.png,152_2.png,152_2_1.png,152_2_2.png',NULL,'2020-12-30 12:35:07'),(13,'广地地坪加重翻新机',14,'161_1.png,161_2.png,161_3.png,161_4.png',NULL,'2020-12-31 08:06:01'),(14,'广地翻新机',14,'162_1.png,162_2.png',NULL,'2020-12-31 08:48:59');
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

-- Dump completed on 2020-12-31 16:57:22
