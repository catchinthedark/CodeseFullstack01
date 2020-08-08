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

SELECT 
    `price`, `type`
FROM
    `room` AS r,
    `hotel` AS h
WHERE
    r.`hotelId` = h.`hotelId`
        AND `name` = 'Melia';
    
SELECT 
    c.*
FROM
    `client` AS c,
    `roomBooking` AS rB,
    `hotel` AS h
WHERE
    rB.`clientId` = c.`clientId`
        AND rB.`hotelId` = h.`hotelId`
        AND h.`name` = 'Melia'
        AND `startDate` <= CURRENT_DATE()
        AND `endDate` >= CURRENT_DATE();

(SELECT 
    r.*, c.`name`
FROM
    `room` AS r,
    `client` AS c,
    `hotel` AS h,
    `roomBooking` AS rB
WHERE
    rB.`clientId` = c.`clientId`
        AND rB.`hotelId` = h.`hotelId`
        AND rB.`roomNumber` = r.`roomNumber`
        AND h.`name` = 'Melia'
        AND `startDate` <= CURRENT_DATE()
        AND `endDate` >= CURRENT_DATE()) UNION (SELECT 
    r.*, NULL
FROM
    `room` AS r,
    `hotel` AS h
WHERE
    r.`hotelId` = h.`hotelId`
        AND `name` = 'Melia'
        AND `roomNumber` NOT IN (SELECT 
            r.`roomNumber`
        FROM
            `room` AS r,
            `client` AS c,
            `hotel` AS h,
            `roomBooking` AS rB
        WHERE
            rB.`clientId` = c.`clientId`
                AND rB.`hotelId` = h.`hotelId`
                AND rB.`roomNumber` = r.`roomNumber`
                AND h.`name` = 'Melia'
                AND `startDate` <= CURRENT_DATE()
                AND `endDate` >= CURRENT_DATE()));

SELECT 
    r.*
FROM
    `room` AS r,
    `hotel` AS h
WHERE
    r.`hotelId` = h.`hotelId`
        AND h.`name` = 'Melia'
        AND NOT EXISTS( SELECT 
            *
        FROM
            `roomBooking` AS rB
        WHERE
            rB.`roomNumber` = r.`roomNumber`);

SELECT 
    `name`, COUNT(r.`roomNumber`)
FROM
    `room` AS r,
    `hotel` AS h
WHERE
    r.`hotelId` = h.`hotelId`
        AND h.`address` = 'London'
GROUP BY `name`;
        
UPDATE `room` 
SET 
    `price` = `price` * 1.05
WHERE
    `type` = 'single'