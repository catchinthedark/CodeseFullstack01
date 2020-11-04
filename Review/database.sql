drop database if exists `dtbase`;
create database `dtbase`;
use `dtbase`;

#
# TABLE STRUCTURE FOR: class
#

DROP TABLE IF EXISTS `class`;

CREATE TABLE `class` (
  `id` varchar(100) CHARACTER SET utf8 NOT NULL,
  `className` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `class`(`id`, `className`) VALUES ('1', 'Math I');
INSERT INTO `class`(`id`, `className`) VALUES ('2', 'Math II');
INSERT INTO `class`(`id`, `className`) VALUES ('3', 'Math III');
INSERT INTO `class`(`id`, `className`) VALUES ('4', 'Math IV');
INSERT INTO `class`(`id`, `className`) VALUES ('5', 'Computer Ethics');
INSERT INTO `class`(`id`, `className`) VALUES ('6', 'Logic Circuit');
INSERT INTO `class`(`id`, `className`) VALUES ('7', 'Probability Theory');

#
# TABLE STRUCTURE FOR: student
#

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` varchar(100) CHARACTER SET utf8 NOT NULL,
  `classId` varchar(100) CHARACTER SET utf8 NOT NULL,
  `fullName` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `gender` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `age` int DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`classId`) REFERENCES `class` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('100', '1', 'Chu Thach Thao', 'Female', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('2', '1', 'Tran Lam', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('3', '1', 'Nguyen Nhat Minh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('4', '2', 'Dao Duc Manh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('5', '2', 'Tong Thi Thu Anh', 'Female', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('6', '3', 'Vu Tuan Minh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('7', '3', 'Dang Quang Minh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('8', '3', 'Nguyen Thu Giang', 'Female', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('9', '3', 'Tran Quang Hai', 'Male', 19);INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('1', '1', 'Chu Thach Thao', 'Female', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('10', '4', 'Tran Lam', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('11', '4', 'Nguyen Nhat Minh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('12', '5', 'Dao Duc Manh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('13', '6', 'Tong Thi Thu Anh', 'Female', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('14', '6', 'Vu Tuan Minh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('15', '7', 'Dang Quang Minh', 'Male', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('16', '7', 'Nguyen Thu Giang', 'Female', 19);
INSERT INTO `student`(`id`, `classId`, `fullName`, `gender`, `age`) VALUES ('17', '7', 'Tran Quang Hai', 'Male', 19);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Cochenngochatmysql79'