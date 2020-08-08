drop database if exists `lesson4basic1`;
create database `lesson4basic1`;
use `lesson4basic1`;

CREATE TABLE `client` (
    `clientId` NVARCHAR(10) PRIMARY KEY,
    `name` NVARCHAR(100),
    `phone` NVARCHAR(100),
    `workplace` NVARCHAR(100)
);
insert into `client` values ('01', 'Anne Hathaway', '0123456', 'US');
insert into `client` values ('02', 'Haruki Murakami', '0123457', 'Japan');
insert into `client` values ('03', 'Lee Seung Gi', '0123458', 'South Korea');

CREATE TABLE `house` (
    `houseId` NVARCHAR(10) PRIMARY KEY,
    `address` NVARCHAR(100),
    `price` INT,
    `owner` NVARCHAR(100)
);
insert into `house` values('01', '221b Baker street', 2000000, 'Nông Văn Dền');
insert into `house` values('02', '50 Wall street', 11000000, 'Ichikawa Takuji');
insert into `house` values('03', '321 Silicon Valley', 10000000, 'Li Xian');
insert into `house` values('04', 'Platform 9 3/4 King-cross Station', 9000000, 'Thomas Harris');
insert into `house` values('05', '25 Bourbon street', 5700000, 'Johnny Depp');

CREATE TABLE `contract` (
    `houseId` NVARCHAR(10),
    FOREIGN KEY (`houseId`)
        REFERENCES `house` (`houseId`),
    `clientId` NVARCHAR(10),
    FOREIGN KEY (`clientId`)
        REFERENCES `client` (`clientId`),
    `startDate` DATE,
    `endDate` DATE
);
insert into `contract` values ('01', '01', "2020-06-07", "2020-09-08");
insert into `contract` values ('02', '01', "2020-08-05", "2020-10-05");
insert into `contract` values ('01', '02', "2020-10-01", "2020-12-01");
insert into `contract` values ('03', '03', "2020-01-01", "2020-06-01");
insert into `contract` values ('03', '02', "2020-07-01", "2020-09-01");

-- Đưa ra danh sách (Địachỉ, Tênchủnhà) của những ngôi nhà có giá thuê ít hơn 10 triệu.
SELECT 
    `address`, `owner`
FROM
    `house`
WHERE
    `price` < 10000000;
    
-- Đưa ra danh sách (MãKH, Họtên, Cơquan) của những người đã từng thuê nhà của chủ nhà có tên là "Nông Văn Dền"    
SELECT 
    cl.`clientId`, cl.`name`, cl.`workplace`
FROM
    `client` AS cl,
    `house` AS h,
    `contract` AS c
WHERE
    c.`clientId` = cl.`clientId`
        AND c.`houseId` = h.`houseId`
        AND h.`owner` = 'Nông Văn Dền';
    
-- Đưa ra danh sách các ngôi nhà chưa từng được ai thuê
SELECT 
    *
FROM
    `house` AS h
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            `contract` AS c
        WHERE
            c.`houseId` = h.`houseId`);

-- Đưa ra giá thuê cao nhất trong số các giá thuê của các ngôi nhà đã từng ít nhất một lần được thuê.
SELECT 
    MAX(`price`)
FROM
    `contract` AS c,
    `house` AS h
WHERE
    c.`houseId` = h.`houseId`;