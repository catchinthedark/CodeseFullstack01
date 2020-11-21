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
  `fullName` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `gender` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `age` int DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('1', 'Chu Thach Thao', 'Female', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('2', 'Tran Lam', 'Male', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('3', 'Nguyen Nhat Minh', 'Male', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('4', 'Dao Duc Manh', 'Male', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('5', 'Tong Thi Thu Anh', 'Female', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('6', 'Vu Tuan Minh', 'Male', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('7', 'Dang Quang Minh', 'Male', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('8', 'Nguyen Thu Giang', 'Female', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('9', 'Tran Quang Hai', 'Male', 19);
INSERT INTO `student`(`id`, `fullName`, `gender`, `age`) VALUES ('10', 'Truong Quang Hieu', 'Male', 19);

DROP TABLE IF EXISTS `stInClass`;

CREATE TABLE `stInClass` (
	`classId` varchar(100) CHARACTER SET utf8 NOT NULL,
    `studentId` varchar(100) CHARACTER SET utf8 NOT NULL,
    `fullName` varchar(100) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('1', '1', 'Chu Thach Thao');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('2', '1', 'Chu Thach Thao');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('5', '1', 'Chu Thach Thao');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('7', '1', 'Chu Thach Thao');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('1', '2', 'Tran Lam');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('2', '2', 'Tran Lam');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('3', '2', 'Tran Lam');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('3', '3', 'Nguyen Nhat Minh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('4', '3', 'Nguyen Nhat Minh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('7', '3', 'Nguyen Nhat Minh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('1', '4', 'Dao Duc Manh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('2', '4', 'Dao Duc Manh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('6', '4', 'Dao Duc Manh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('7', '4', 'Dao Duc Manh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('2', '5', 'Tong Thi Thu Anh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('3', '5', 'Tong Thi Thu Anh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('6', '5', 'Tong Thi Thu Anh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('4', '6', 'Vu Tuan Minh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('6', '6', 'Vu Tuan Minh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('1', '7', 'Dang Quang Minh');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('5', '8', 'Nguyen Thu Giang');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('2', '9', 'Tran Quang Hai');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('3', '9', 'Tran Quang Hai');
INSERT INTO `stInClass`(`classId`, `studentId`, `fullName`) VALUES('5', '10', 'Truong Quang Hieu');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Cochenngochatmysql79'