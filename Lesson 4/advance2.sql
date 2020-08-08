drop database if exists `lesson4advance2`;
create database `lesson4advance2`;
use `lesson4advance2`;

CREATE TABLE Nhanvien (
    MSNV VARCHAR(10) NOT NULL,
    Hoten VARCHAR(30) NOT NULL,
    Tuoi INT NOT NULL,
    Luong FLOAT NOT NULL,
    CONSTRAINT pk_Nhanvien PRIMARY KEY (MSNV)
);
 insert into Nhanvien values ('NV01', 'Teo', 21, 6000000);
 insert into Nhanvien values ('NV02', 'Linh', 21, 6000000);
 insert into Nhanvien values ('NV03', 'Quynh', 21, 7000000);
 insert into Nhanvien values ('NV04', 'Dung', 21, 8000000);
 insert into Nhanvien values ('NV05', 'Phuc', 21, 5000000);
 insert into Nhanvien values ('NV06', 'Minh', 21, 4000000);
 insert into Nhanvien values ('NV07', 'Lan', 21, 10000000);
 insert into Nhanvien values ('NV08', 'Duong', 21, 12000000);
 insert into Nhanvien values ('NV09', 'Binh', 21, 8000000);
 insert into Nhanvien values ('NV10', 'Toan', 21, 9000000);
 insert into Nhanvien values ('NV11', 'Giang', 21, 5000000);
 insert into Nhanvien values ('NV12', 'My', 21, 6000000);

CREATE TABLE Phong (
    MSP VARCHAR(10) NOT NULL,
    Tenphong VARCHAR(30) NOT NULL,
    Diadiem VARCHAR(100) NOT NULL,
    Nganquy FLOAT NOT NULL,
    MSTP VARCHAR(10),
    CONSTRAINT pk_Phong PRIMARY KEY (MSP),
    CONSTRAINT fk1_Phong FOREIGN KEY (MSTP) REFERENCES Nhanvien (MSNV)
);
insert into Phong values('P01', 'Phongtochuc', 'Tang 2', 2000000, 'NV01');
insert into Phong values('P02', 'Phongkehoach', 'Tang 1', 2000000, 'NV01');
insert into Phong values('P03', 'Payroll', 'Tang 2', 2000000, 'NV01');
insert into Phong values('P04', 'Sales', 'Tang 3', 10000000, 'NV05');
insert into Phong values('P05', 'Shipping', 'Tang 5', 12000000, 'NV06');
insert into Phong values('P06', 'Billing', 'Tang 4', 3000000, 'NV07');
insert into Phong values('P07', 'Marketing', 'Tang 1', 500000, 'NV05');
insert into Phong values('P08', 'Research and Development', 'Tang 2', 2000000, 'NV08');

CREATE TABLE Lamviec (
    MSNV VARCHAR(10) NOT NULL,
    MSP VARCHAR(10) NOT NULL,
    Thoigian DATE NOT NULL,
    CONSTRAINT pk_Lamviec PRIMARY KEY (MSNV , MSP , Thoigian),
    CONSTRAINT fk1_Lamviec FOREIGN KEY (MSNV) REFERENCES Nhanvien (MSNV),
    CONSTRAINT fk2_Lamviec FOREIGN KEY (MSP) REFERENCES Phong (MSP)
);
 insert into Lamviec values('NV01', 'P01', '2016-02-12');
 insert into Lamviec values('NV01', 'P02', '2016-12-12');
 insert into Lamviec values('NV02', 'P02', '2014-02-15');
 insert into Lamviec values('NV02', 'P01', '2011-04-12');
 insert into Lamviec values('NV03', 'P03', '2012-04-16');
 insert into Lamviec values('NV04', 'P04', '2011-07-24');
 insert into Lamviec values('NV05', 'P01', '2016-05-20');
 insert into Lamviec values('NV06', 'P07', '2016-06-22');
 insert into Lamviec values('NV07', 'P03', '2015-09-02');
 insert into Lamviec values('NV08', 'P04', '2009-06-18');
 insert into Lamviec values('NV09', 'P05', '2010-09-17');
 insert into Lamviec values('NV10', 'P06', '2013-10-14');
 insert into Lamviec values('NV11', 'P08', '2016-02-12');
 insert into Lamviec values('NV12', 'P08', '2016-02-12');
 
 -- a  Đưa ra tên và tuổi của các nhân viên làm việc cho cả phòng Tổ chức và Kế hoạch
SELECT DISTINCT
    nv.`Hoten`, nv.`tuoi`
FROM
    `Lamviec` AS lv
        INNER JOIN
    `Nhanvien` AS nv ON lv.`MSNV` = nv.`MSNV`
WHERE
    nv.`MSNV` IN (SELECT 
            nv.`MSNV`
        FROM
            `Lamviec` AS lv
                INNER JOIN
            `Nhanvien` AS nv ON lv.`MSNV` = nv.`MSNV`
                INNER JOIN
            `Phong` AS p ON lv.`MSP` = p.`MSP`
        WHERE
            p.`Tenphong` = 'Phongtochuc')
        AND nv.`MSNV` IN (SELECT 
            nv.`MSNV`
        FROM
            `Lamviec` AS lv
                INNER JOIN
            `Nhanvien` AS nv ON lv.`MSNV` = nv.`MSNV`
                INNER JOIN
            `Phong` AS p ON lv.`MSP` = p.`MSP`
        WHERE
            p.`Tenphong` = 'Phongkehoach');
            
-- b Với mỗi phòng với trên 20 nhân viên, hãy đưa ra mã số phong và số nhân viên làm trong phòng đó
SELECT DISTINCT 
	T1.`MSP`, COUNT(T1.`MSP`) AS Sonhanvien
FROM 
	(SELECT p.`MSP`, lv.`MSNV`
    FROM
		`Phong` AS p
		INNER JOIN `Lamviec` AS `lv` ON p.`MSP` = lv.`MSP`
	ORDER BY p.`MSP`) AS T1
GROUP BY `MSP`
HAVING COUNT(T1.`MSP`) > 20;

-- c Đưa ra tên của các nhân viên mà lương của họ cao hơn cả ngân quỹ của tất cả các phòng mà nhân viên đó làm việc
SELECT DISTINCT
	nv.`Hoten`
FROM
	(SELECT nv.`MSNV`, p.`Nganquy`
    FROM
		`Nhanvien` AS nv
		INNER JOIN `Lamviec` AS lv ON nv.`MSNV` = lv.`MSNV`
        INNER JOIN `Phong` AS p ON p.`MSP` = lv.`MSP`
	ORDER BY nv.`MSNV`) AS T1
    INNER JOIN `Nhanvien` AS nv ON nv.`MSNV` = T1.`MSNV`
WHERE 
	nv.`Luong` > (SELECT MAX(T2.`Nganquy`)
				FROM (SELECT nv.`MSNV`, p.`Nganquy`
						FROM
							`Nhanvien` AS nv
							INNER JOIN `Lamviec` AS lv ON nv.`MSNV` = lv.`MSNV`
							INNER JOIN `Phong` AS p ON p.`MSP` = lv.`MSP`
						ORDER BY nv.`MSNV`) AS T2
				WHERE T2.`MSNV` = nv.`MSNV`);
                
-- d Đưa ra mã số trưởng phòng của những người trưởng phòng mà các phòng họ quản lý đều có ngân quỹ > 1,000,000
SELECT DISTINCT
	`MSTP`
FROM 
	`Phong` as p
WHERE
	(SELECT MIN(p1.`Nganquy`)
    FROM 
		`Phong` as p1
    WHERE
		p.`MSTP` = p1.`MSTP`
	GROUP BY p.`MSTP`
    ) > 1000000;
    
-- e Đưa ra tên của người trưởng phòng mà phòng đó có ngân quỹ lớn nhất
SELECT 
	nv.`Hoten`
FROM
	`Phong` AS p
    INNER JOIN `Nhanvien` AS nv ON nv.`MSNV` = p.`MSTP`
WHERE
	`Nganquy` = (SELECT MAX(`Nganquy`)
				FROM `Phong`);

-- f Nếu một người có thể quản lý nhiều phòng, người đó có quyền kiểm soát ngân quỹ
-- của tất cả các phògn đó. Hãy đưa ra mã số của người trưởng phòng mà tổng số
-- ngân quỹ được kiểm soát bởi người đó > 5,000,000
SELECT	
	`MSTP`
FROM
	(SELECT `MSTP`, SUM(`Nganquy`) AS Nganquy
    FROM `Phong`
    GROUP BY `MSTP`
    ) AS T
WHERE `Nganquy` > 5000000