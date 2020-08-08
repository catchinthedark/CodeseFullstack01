drop database if exists `lesson4advance3`;
create database `lesson4advance3`;
use `lesson4advance3`;

CREATE TABLE `Phong` (
    MaP CHAR(3) NOT NULL,
    TenP VARCHAR(50) NOT NULL,
    Diadiem VARCHAR(100) NOT NULL,
    SoDT VARCHAR(20) NOT NULL,
    CONSTRAINT pk_Phong PRIMARY KEY (MaP)
);
insert into Phong values('P01', 'Phong Mo Hinh', 'Tang 5', '0987777777');
insert into Phong values('P02', 'Phong Giao Dien', 'Tang 4', '0941111111');
insert into Phong values('P03', 'Phong Kiem Thu', 'Tang 3', '0901234567');
insert into Phong values('P04', 'Phong Thiet Ke', 'Tang 2', '0986663331');
insert into Phong values('P05', 'NCKH', 'Tang 1', '0915671112');

CREATE TABLE `Nhanvien` (
	MaNV char(10) NOT NULL,
	Hoten varchar(50) NOT NULL,
	Ngaysinh date NOT NULL,
	MaP char(3) NOT NULL,
	CONSTRAINT pk_Nhanvien PRIMARY KEY(MaNV),
    CONSTRAINT fk1_Nhanvien FOREIGN KEY(MaP) REFERENCES Phong(MaP)
);
insert into Nhanvien values ('NV001', 'Teo', '1996-08-12', 'P01');
insert into Nhanvien values ('NV002', 'Ty', '1997-07-12', 'P02');
insert into Nhanvien values ('NV003', 'Binh', '1993-06-12', 'P03');
insert into Nhanvien values ('NV004', 'Giai', '1994-01-12', 'P04');
insert into Nhanvien values ('NV005', 'An', '1995-02-12', 'P05');
insert into Nhanvien values ('NV006', 'Nga', '1995-03-12', 'P01');
insert into Nhanvien values ('NV007', 'Lan', '1995-04-12', 'P02');
insert into Nhanvien values ('NV008', 'Trong', '1997-05-22', 'P04');
insert into Nhanvien values ('NV009', 'Phu', '1991-06-12', 'P01');
insert into Nhanvien values ('NV010', 'Toan', '1994-03-21', 'P01');
insert into Nhanvien values ('NV011', 'Ty', '1992-12-24', 'P05');

CREATE TABLE Duan (
    MaDA CHAR(6) NOT NULL,
    TenDA VARCHAR(50) NOT NULL,
    Ngansach FLOAT NOT NULL,
    CONSTRAINT pk_Duan PRIMARY KEY (MaDA)
);
insert into Duan values('DA0001', 'Quan ly dao tao', 20000000);
insert into Duan values('DA0002', 'Thu thap du lieu', 80000);
insert into Duan values('DA0003', 'Thu gom rac thai', 60000);
insert into Duan values('DA0004', 'Dao tao tu xa', 3000000);
insert into Duan values('DA0005', 'Mua ban but bi', 600000);

CREATE TABLE Thamgia (
    MaNV CHAR(10) NOT NULL,
    MaDA CHAR(6) NOT NULL,
    Sogio INT NOT NULL,
    CONSTRAINT pk_Thamgia PRIMARY KEY (MaNV , MaDA),
    CONSTRAINT fk1_Thamgia FOREIGN KEY (MaNV) REFERENCES Nhanvien (MaNV),
    CONSTRAINT fk2_Thamgia FOREIGN KEY (MaDA) REFERENCES Duan (MaDA)
);
insert into Thamgia values('NV001', 'DA0001', 50);
insert into Thamgia values('NV009', 'DA0001', 14);
insert into Thamgia values('NV006', 'DA0001', 14);
insert into Thamgia values('NV001', 'DA0004', 20);
insert into Thamgia values('NV005', 'DA0004', 3);
insert into Thamgia values('NV009', 'DA0004', 7);
insert into Thamgia values('NV002', 'DA0005', 10);
insert into Thamgia values('NV007', 'DA0005', 10);
insert into Thamgia values('NV008', 'DA0003', 20);

-- a
SELECT `TenDA`
FROM `Duan` 
WHERE `Ngansach` > 50000 AND `Ngansach` < 100000;

-- b
SELECT nv.`Hoten`
FROM
	`Thamgia` AS tg
    INNER JOIN `Nhanvien` AS nv ON tg.`MaNV` = nv.`MaNV`
    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
WHERE 
	da.`TenDA` = 'Quan ly dao tao';
    
-- c
SELECT DISTINCT
	tg.`MaNV`
FROM
	`Thamgia` AS tg
    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
WHERE
	tg.`MaNV` in (SELECT `MaNV`
				FROM 
					`Thamgia` AS tg
                    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
                WHERE
					da.`TenDA` = 'Quan ly dao tao')
	AND tg.`MaNV` in (SELECT `MaNV`
				FROM 
					`Thamgia` AS tg
                    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
                WHERE
					da.`TenDA` = 'Dao tao tu xa');
                    
-- d
SELECT DISTINCT
	tg.`MaNV`
FROM
	`Thamgia` AS tg
    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
WHERE
	tg.`MaNV` in (SELECT `MaNV`
				FROM 
					`Thamgia` AS tg
                    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
                WHERE
					da.`TenDA` = 'Quan ly dao tao')
	AND tg.`MaNV` not in (SELECT `MaNV`
				FROM 
					`Thamgia` AS tg
                    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
                WHERE
					da.`TenDA` = 'Dao tao tu xa');
                    
-- e
SELECT p.`MaP`
FROM `Phong` AS p
WHERE
	p.`MaP` not in (SELECT DISTINCT nv.`MaP`
					FROM 
						`Thamgia` AS tg
                        INNER JOIN `Nhanvien` AS nv ON tg.`MaNV` = nv.`MaNV`);
                
-- f
SELECT da.*
FROM 
	(SELECT tg.`MaDA`, p.`MaP`, COUNT(*) AS f
	FROM `Thamgia` AS tg
		INNER JOIN `Nhanvien` AS nv ON tg.`MaNV` = nv.`MaNV`
		INNER JOIN `Phong` AS p ON p.`MaP` = nv.`MaP`
	WHERE p.`TenP` = 'NCKH'
	GROUP BY tg.`MaDA`, p.`MaP`) AS T
	INNER JOIN `Duan` AS da ON T.`MaDA` = da.`MaDA`
WHERE 
	f = (SELECT COUNT(*)
		FROM
			`Nhanvien` as nv
            INNER JOIN `Phong` AS p ON nv.`MaP` = p.`MaP`
        WHERE
			p.`MaP` = T.`MaP`);

-- g
SELECT AVG(da.`Ngansach`)
FROM 
	`Thamgia` AS tg
    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
WHERE 
	tg.`MaNV` = 'NV001';
    
-- h
SELECT COUNT(*)
FROM
	`Thamgia` AS tg
    INNER JOIN `Nhanvien` AS nv ON tg.`MaNV` = nv.`MaNV`
    INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
WHERE 
	da.`TenDA` = 'Quan ly dao tao';
    
-- i
(SELECT da.`TenDA`
FROM 
	(SELECT da.`MaDA`, COUNT(*) AS Songuoi
	FROM
		`Duan` AS da
        INNER JOIN `Thamgia` AS tg ON tg.`MaDA` = da.`MaDA`
    GROUP BY da.`MaDA`
    ) AS T
    INNER JOIN `Duan` AS da ON da.`MaDA` = T.`MaDA`
WHERE
	`Songuoi` < 10) UNION (
SELECT da.`TenDA`
FROM `Duan` AS da
WHERE da.`MaDA` NOT IN (SELECT DISTINCT tg.`MaDA`
						FROM `Thamgia` AS tg)
);

-- j
SELECT da.*
FROM 
	(SELECT da.`MaDA`, COUNT(*) AS f
	FROM `Thamgia` AS tg
		INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
	GROUP BY da.`MaDA`) AS T
    INNER JOIN `Duan` AS da ON da.`MaDA` = T.`MaDA`
WHERE 
	`f` = (SELECT MAX(`f`)
			FROM (SELECT da.`MaDA`, COUNT(*) AS f
				FROM `Thamgia` AS tg
					INNER JOIN `Duan` AS da ON tg.`MaDA` = da.`MaDA`
				GROUP BY da.`MaDA`) AS T)


