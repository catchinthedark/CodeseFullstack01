drop database if exists lesson4advance1;
create database lesson4advance1;
use `lesson4advance1`;

CREATE TABLE `supplier` (
    `supplierId` NVARCHAR(10) PRIMARY KEY,
    `name` NVARCHAR(100),
    `address` NVARCHAR(100)
);
insert into `supplier` values ('01', 'Jack Sparrow', 'Black Pearl');
insert into `supplier` values ('02', 'Park Sae Royi', 'Dan Bam');
insert into `supplier` values ('03', 'Otis Milburn', 'Moordale');
insert into `supplier` values ('04', 'Harry Potter', 'Hogwarts');
insert into `supplier` values ('05', 'Mia Thermopolis', 'Genovia');
insert into `supplier` values ('06', 'Dustin', 'Earth');

CREATE TABLE `product` (
    `productId` NVARCHAR(10) PRIMARY KEY,
    `name` NVARCHAR(100),
    `color` NVARCHAR(100)
);
insert into `product` values ('01', 'book 1', 'red');
insert into `product` values ('02', 'book 2', 'red');
insert into `product` values ('03', 'book 3', 'green');
insert into `product` values ('04', 'book 4', 'red');
insert into `product` values ('05', 'book 5', 'red');
insert into `product` values ('06', 'book 6', 'blue');
insert into `product` values ('07', 'book 7', 'blue');
insert into `product` values ('08', 'book 8', 'red');
insert into `product` values ('09', 'book 9', 'green');
insert into `product` values ('10', 'book 10', 'green');
insert into `product` values ('11', 'book 11', 'blue');

CREATE TABLE `supply` (
    `supplierId` NVARCHAR(10),
    FOREIGN KEY (`supplierId`)
        REFERENCES `supplier` (`supplierId`),
    `productId` NVARCHAR(10),
    FOREIGN KEY (`productId`)
        REFERENCES `product` (`productId`),
    `price` INT
);
insert into `supply` values ('01', '01', 500);
insert into `supply` values ('01', '02', 600);
insert into `supply` values ('01', '05', 50);
insert into `supply` values ('02', '01', 100);
insert into `supply` values ('02', '02', 200);
insert into `supply` values ('02', '06', 10);
insert into `supply` values ('02', '07', 200);
insert into `supply` values ('03', '06', 600);
insert into `supply` values ('03', '07', 80);
insert into `supply` values ('04', '11', 400);
insert into `supply` values ('04', '05', 50);
insert into `supply` values ('04', '10', 500);
insert into `supply` values ('04', '02', 600);
insert into `supply` values ('05', '11', 80);
insert into `supply` values ('05', '09', 400);
insert into `supply` values ('05', '07', 50);
insert into `supply` values ('06', '01', 500);
insert into `supply` values ('06', '02', 600);
insert into `supply` values ('06', '08', 80);
insert into `supply` values ('06', '04', 400);
insert into `supply` values ('06', '05', 50);

-- a Đưa ra tên của những hãng có cung ứng ít nhất 1 mặt hàng màu đỏ
SELECT 
    sr.`name`
FROM
    `supplier` AS sr,
    `product` AS p,
    `supply` AS s
WHERE
    s.`supplierId` = sr.`supplierId`
        AND s.`productId` = p.`productId`
        AND `color` = 'red'
GROUP BY sr.`name`;

-- b Đưa ra mã số của các hãng có cung ứng ít nhất 1 mặt hàng màu đỏ hoặc 1 mặt hàng màu xanh
SELECT 
    sr.`supplierId`
FROM
    `supplier` AS sr,
    `product` AS p,
    `supply` AS s
WHERE
    s.`supplierId` = sr.`supplierId`
        AND s.`productId` = p.`productId`
        AND (`color` = 'red' OR `color` = 'green')
GROUP BY sr.`name`;

-- c Đưa ra mã số của hãng có cung ứng ít nhất 1 mặt hàng màu đỏ và 1 mặt hàng màu xanh
SELECT DISTINCT
    `supplierId`
FROM
    (SELECT 
        sr.`supplierId`
    FROM
        `supplier` AS sr, `product` AS p, `supply` AS s
    WHERE
        s.`supplierId` = sr.`supplierId`
            AND s.`productId` = p.`productId`
            AND `color` = 'red') AS T1
WHERE
    `supplierId` IN (SELECT 
            sr.`supplierId`
        FROM
            `supplier` AS sr,
            `product` AS p,
            `supply` AS s
        WHERE
            s.`supplierId` = sr.`supplierId`
                AND s.`productId` = p.`productId`
                AND `color` = 'green');
    
-- d Đưa ra mã số của hãng cung ứng tất cả các mặt hàng màu đỏ
SELECT DISTINCT
    T1.`supplierId`
FROM
    (SELECT DISTINCT
        s.`supplierId`, p.`productId`
    FROM
        `supply` AS s
    JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
    JOIN `product` AS p ON s.`productId` = p.`productId`
    WHERE
        `color` = 'red') AS T1,
    `product` AS p
WHERE
    T1.`supplierId` IN (SELECT 
            T1.`supplierId`
        FROM
            (SELECT DISTINCT
                s.`supplierId`, p.`productId`
            FROM
                `supply` AS s
            JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
            JOIN `product` AS p ON s.`productId` = p.`productId`
            WHERE
                `color` = 'red') AS T1
        GROUP BY T1.`supplierId`
        HAVING COUNT(*) = (SELECT 
                COUNT(*)
            FROM
                `product`
            WHERE
                `color` = 'red'));
        
-- e Đưa ra mã số của hãng cung ứng tất cả các mặt hàng màu đỏ và màu xanh
SELECT DISTINCT
    T1.`supplierId`
FROM
    (SELECT DISTINCT
        s.`supplierId`, p.`productId`
    FROM
        `supply` AS s
    JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
    JOIN `product` AS p ON s.`productId` = p.`productId`
    WHERE
        `color` = 'red' OR `color` = 'green') AS T1,
    `product` AS p
WHERE
    T1.`supplierId` IN (SELECT 
            T1.`supplierId`
        FROM
            (SELECT DISTINCT
                s.`supplierId`, p.`productId`
            FROM
                `supply` AS s
            JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
            JOIN `product` AS p ON s.`productId` = p.`productId`
            WHERE
                `color` = 'red') AS T2
        GROUP BY T2.`supplierId`
        HAVING COUNT(*) = (SELECT 
                COUNT(*)
            FROM
                `product`
            WHERE
                `color` = 'red'))
        AND T1.`supplierId` IN (SELECT 
            T1.`supplierId`
        FROM
            (SELECT DISTINCT
                s.`supplierId`, p.`productId`
            FROM
                `supply` AS s
            JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
            JOIN `product` AS p ON s.`productId` = p.`productId`
            WHERE
                `color` = 'green') AS T3
        GROUP BY T3.`supplierId`
        HAVING COUNT(*) = (SELECT 
                COUNT(*)
            FROM
                `product`
            WHERE
                `color` = 'green'));
                
-- f Đưa ra mã số của hãng cung ứng tất cả các mặt hàng màu đỏ hoặc tất cả các mặt hàng màu xanh
SELECT DISTINCT
    T1.`supplierId`
FROM
    (SELECT DISTINCT
        s.`supplierId`, p.`productId`
    FROM
        `supply` AS s
    JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
    JOIN `product` AS p ON s.`productId` = p.`productId`
    WHERE
        `color` = 'red' OR `color` = 'green') AS T1,
    `product` AS p
WHERE
    T1.`supplierId` IN (SELECT 
            T2.`supplierId`
        FROM
            (SELECT DISTINCT
                s.`supplierId`, p.`productId`
            FROM
                `supply` AS s
            JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
            JOIN `product` AS p ON s.`productId` = p.`productId`
            WHERE
                `color` = 'red') AS T2
        GROUP BY T2.`supplierId`
        HAVING COUNT(*) = (SELECT 
                COUNT(*)
            FROM
                `product`
            WHERE
                `color` = 'red'))
        OR T1.`supplierId` IN (SELECT 
            T3.`supplierId`
        FROM
            (SELECT DISTINCT
                s.`supplierId`, p.`productId`
            FROM
                `supply` AS s
            JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
            JOIN `product` AS p ON s.`productId` = p.`productId`
            WHERE
                `color` = 'green') AS T3
        GROUP BY T3.`supplierId`
        HAVING COUNT(*) = (SELECT 
                COUNT(*)
            FROM
                `product`
            WHERE
                `color` = 'green'));
                
-- g Đưa ra cặp mã số của hãng cung ứng sao cho hãng cung ứng tương ứng với mã số thứ nhất cung cấp một mặt hàng nào đó với giá cao hơn so với giá mà hãng tương ứng với mã số thứ hai cung cấp cũng mặt hàng đó
SELECT DISTINCT
    s1.`supplierId`, s2.`supplierId`
FROM
    `supply` AS s1,
    `supply` AS s2
WHERE
    s1.`supplierId` <> s2.`supplierId`
        AND s1.`productId` = s2.`productId`
        AND s1.`price` > s2.`price`;
        
-- h Đưa ra mã số của mặt hàng được cung cấp bởi ít nhất hai hãng cung ứng
SELECT DISTINCT
    s1.`productId`
FROM
    `supply` AS s1,
    `supply` AS s2
WHERE
    s1.`supplierId` <> s2.`supplierId`
        AND s1.`productId` = s2.`productId`;
        
-- i Đưa ra mã số của mặt hàng đắt nhất được cung cấp bởi hãng Dustin
SELECT 
    s.`productId`
FROM
    `supply` AS s
        INNER JOIN
    `supplier` AS sr ON s.`supplierId` = sr.`supplierId`
WHERE
    `name` = 'Dustin' 
    AND `price` = (SELECT MAX(`price`)
					FROM
						`supply` AS s
							INNER JOIN
						`supplier` AS sr ON s.`supplierId` = sr.`supplierId`
					WHERE
						`name` = 'Dustin');

-- j Đưa ra mã số của mặt hàng được cung ứng bởi tất cả các hãng mà giá tiền đều nhỏ hơn 200
SELECT  DISTINCT 
	T1.`productId`
FROM 
	(SELECT 
	s.`productId`, s.`supplierId`
	FROM `supply` AS s
	INNER JOIN `supplier` AS sr ON s.`supplierId` = sr.`supplierId`) AS T1
WHERE 
	(SELECT COUNT(*)
	FROM `supply` AS s
	WHERE T1.`productId` = s.`productId`) = 
		(SELECT count(*) 
        FROM `supplier`) 
	AND (SELECT MAX(s.`price`)
		FROM `supply` AS s
        WHERE T1.`productId` = s.`productId`
    ) < 200
	