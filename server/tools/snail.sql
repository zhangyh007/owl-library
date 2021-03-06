-- show create table books

DROP TABLE IF EXISTS `books`;

 CREATE TABLE `books` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `isbn` varchar(20) NOT NULL,
   `openId` varchar(50) NOT NULL,
   `title` varchar(100) NOT NULL,
   `image` varchar(100) DEFAULT NULL,
   `alt` varchar(100) NOT NULL,
   `publisher` varchar(100) NOT NULL,
   `summary` varchar(1500) NOT NULL,
   `price` varchar(100) NOT NULL,
   `rate` float DEFAULT NULL,
   `tags` varchar(100) DEFAULT NULL,
   `author` varchar(100) DEFAULT NULL,
   `count` int(11) DEFAULT '0',
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openId` varchar(100) NOT NULL,
  `bookId` varchar(100) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
