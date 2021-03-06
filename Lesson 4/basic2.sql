drop database if exists `lesson4basic2`;
create database `lesson4basic2`;
use `lesson4basic2`;

CREATE TABLE `hotel` (
    `hotelId` NVARCHAR(10) PRIMARY KEY,
    `name` NVARCHAR(100),
    `address` NVARCHAR(100)
);
insert into `hotel` values('01', 'Melia', 'Paris');
insert into `hotel` values('02', 'Selia', 'London');
insert into `hotel` values('03', 'Helia', 'London');

CREATE TABLE `room` (
    `roomNumber` INT PRIMARY KEY,
    `hotelId` NVARCHAR(10),
    FOREIGN KEY (`hotelId`)
        REFERENCES `hotel` (`hotelId`),
    `type` NVARCHAR(100),
    `price` INT
);
insert into `room` values (101, '01', 'single', 500000);
insert into `room` values (102, '01', 'double', 800000);
insert into `room` values (201, '01', 'queen', 1000000);
insert into `room` values (202, '01', 'king', 120000);
insert into `room` values (301, '01', 'master', 2000000);
insert into `room` values (100, '02', 'single', 650000);
insert into `room` values (103, '02', 'single', 650000);
insert into `room` values (205, '03', 'double', 800000);
insert into `room` values (306, '03', 'king', 1500000);

CREATE TABLE `client` (
    `clientId` NVARCHAR(10) PRIMARY KEY,
    `name` NVARCHAR(100),
    `address` NVARCHAR(100)
);
insert into `client` values ('01', 'Thach Thao', 'Vietnam');
insert into `client` values ('02', 'Lee Seung Gi', 'South Korea');
insert into `client` values ('03', 'Li Xian', 'China');
insert into `client` values ('04', 'Asa Butterfield', 'England');
insert into `client` values ('05', 'Kwon Ji Yong', 'South Korea');

CREATE TABLE `roomBooking` (
    `hotelId` NVARCHAR(10),
    FOREIGN KEY (`hotelId`)
        REFERENCES `hotel` (`hotelId`),
    `clientId` NVARCHAR(10),
    FOREIGN KEY (`clientId`)
        REFERENCES `client` (`clientId`),
    `startDate` DATE PRIMARY KEY,
    `endDate` DATE,
    `roomNumber` INT
);
insert into `roomBooking` values ('01', '01', "2020-01-01", "2020-02-01", 101);
insert into `roomBooking` values ('01', '02', "2020-01-02", "2020-02-01", 102);
insert into `roomBooking` values ('01', '02', "2020-05-06", "2020-06-01", 101);
insert into `roomBooking` values ('01', '03', "2020-07-01", "2020-07-05", 202);
insert into `roomBooking` values ('01', '04', "2020-08-01", "2020-08-20", 102);
insert into `roomBooking` values ('01', '05', "2020-07-24", "2020-09-01", 101);

-- Đưa ra danh sách Giá và LoạiP của tất cả các phòng của khách sạn Melia.
SELECT `price`, `type`
FROM `room` AS r
    INNER JOIN `hotel` AS h ON h.`hotelId` = r.`hotelId`
WHERE `name` = 'Melia';
    
-- Liệt kê tất cả các khách đang ở khách sạn Melia.
SELECT c.*
FROM `client` AS c
    INNER JOIN`roomBooking` AS rB ON rB.`clientId` = c.`clientId`
    INNER JOIN `hotel` AS h ON h.`hotelId` = rB.`hotelId`
WHERE h.`name` = 'Melia'
	AND `startDate` <= CURRENT_DATE()
	AND `endDate` >= CURRENT_DATE();

-- Liệt kê tất cả các phòng tại khách sạn Melia và (tên khách đang ở phòng đó nếu phòng đó có người ở).
(SELECT r.`roomNumber`, `type`, `price`, c.`name` AS `client`
FROM `room` AS r
    INNER JOIN `roomBooking` AS rB ON rB.`roomNumber` = r.`roomNumber`
    INNER JOIN `client` AS c ON c.`clientId` = rB.`clientId`
    INNER JOIN `hotel` AS h ON h.`hotelId` = rB.`hotelId`
WHERE h.`name` = 'Melia'
	AND `startDate` <= CURRENT_DATE()
	AND `endDate` >= CURRENT_DATE()
) UNION (
SELECT r.`roomNumber`, `type`, `price`, NULL
FROM `room` AS r
    INNER JOIN `hotel` AS h ON h.`hotelId` = r.`hotelId`
WHERE h.`name` = 'Melia'
    AND `roomNumber` NOT IN (SELECT r.`roomNumber`
						FROM `room` AS r
							INNER JOIN `roomBooking` AS rB ON rB.`roomNumber` = r.`roomNumber`
							INNER JOIN `client` AS c ON c.`clientId` = rB.`clientId`
							INNER JOIN `hotel` AS h ON h.`hotelId` = rB.`hotelId`
						WHERE h.`name` = 'Melia'
							AND `startDate` <= CURRENT_DATE()
							AND `endDate` >= CURRENT_DATE()));

-- Liệt kê các phòng chưa có người ở tại khách sạn Melia từ trước đến nay.
SELECT `roomNumber`, `price`, `type`
FROM `room` AS r
    INNER JOIN `hotel` AS h ON h.`hotelId` = r.`hotelId`
WHERE `name` = 'Melia'
	AND `roomNumber` NOT IN ( SELECT rB.`roomNumber`
							FROM `roomBooking` AS rB
							WHERE rB.`roomNumber` = r.`roomNumber`);

-- Hãy cho biết tổng số phòng của mỗi khách sạn tại London.
SELECT `name`, COUNT(r.`roomNumber`)
FROM `room` AS r
    INNER JOIN `hotel` AS h ON h.`hotelId` = r.`hotelId`
WHERE h.`address` = 'London'
GROUP BY `name`;
        
-- Tăng đơn giá của tất cả các phòng đơn lên thêm 5%
UPDATE `room` 
SET `price` = `price` * 1.05
WHERE `type` = 'single'