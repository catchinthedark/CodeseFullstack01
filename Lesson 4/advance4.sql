Drop database if exists `lesson4advance4`;
create database `lesson4advance4`;
use `lesson4advance4`;

CREATE TABLE sinhvien(
	mssv char(8) not null,
	hoten varchar(30) not null,
	ngaysinh date ,
	quequan varchar(30)
);
ALTER TABLE sinhvien ADD CONSTRAINT pk_sv PRIMARY KEY (mssv);
INSERT INTO sinhvien VALUES ('20142014', 'Le Van Long', date '1996-01-10', 'nam dinh');
INSERT INTO sinhvien VALUES ('20142017', 'Tran Tuan Minh', date '1996-04-06', 'ha tay');
INSERT INTO sinhvien VALUES ('20142012', 'Nguyen Van Minh', date '1995-09-10', 'bac giang');
INSERT INTO sinhvien VALUES ('20142015', 'Tran Van Tuan', date '1996-01-03', 'ca mau');
INSERT INTO sinhvien VALUES ('20152016', 'Nguyen Anh Quan', date '1997-04-10', 'quang ninh');
INSERT INTO sinhvien VALUES ('20042325', 'Nguyen Thuy Linh', date '1990-02-07', 'da nang');

CREATE TABLE monhoc(
	msmh char(8) not null,
	tenmh varchar(20) not null,
	tengv varchar(30) not null
);
ALTER TABLE monhoc ADD CONSTRAINT pk_mh PRIMARY KEY (msmh);
INSERT INTO monhoc VALUES ('m1', 'csdl', 'Le Quan');
INSERT INTO monhoc VALUES ('m2', 'csdl', 'Nguyen Thi Oanh');
INSERT INTO monhoc VALUES ('m3', 'giaitich', 'Nguyen Duy Thanh');
INSERT INTO monhoc VALUES ('m4', 'vldc', 'Cao Ba Quat');
INSERT INTO monhoc VALUES ('m5', 'ctdlgt', 'Nguyen Duc Nghia');
INSERT INTO monhoc VALUES ('m6', 'oop', 'Trinh Thanh Trung');
INSERT INTO monhoc VALUES ('m7', 'ktlt', 'Vu Duc Vuong');
INSERT INTO monhoc VALUES ('m8', 'cnpm', 'Vu Thi Huong Giang');

CREATE TABLE dangky(
	msmh char(8) not null,
	mssv char(8) not null,
	diem float not null
);
ALTER TABLE dangky ADD CONSTRAINT pk_dk PRIMARY KEY (msmh, mssv);
ALTER TABLE dangky ADD CONSTRAINT fk_2sv FOREIGN KEY (mssv) REFERENCES sinhvien(mssv);
ALTER TABLE dangky ADD CONSTRAINT fk_2mh FOREIGN KEY (msmh) REFERENCES monhoc(msmh);
ALTER TABLE dangky ADD CONSTRAINT ck_diem CHECK (diem>=0 and diem <= 10);
INSERT INTO dangky VALUES ('m1', '20142012', 8);
INSERT INTO dangky VALUES ('m1', '20142014', 9);
INSERT INTO dangky VALUES ('m1', '20142015', 8);
INSERT INTO dangky VALUES ('m2', '20142017', 5);
INSERT INTO dangky VALUES ('m2', '20142012', 4);
INSERT INTO dangky VALUES ('m2', '20142014', 10);
INSERT INTO dangky VALUES ('m2', '20042325', 6);
INSERT INTO dangky VALUES ('m3', '20042325', 8);
INSERT INTO dangky VALUES ('m3', '20142015', 3);
INSERT INTO dangky VALUES ('m4', '20142012', 7);
INSERT INTO dangky VALUES ('m4', '20142017', 9);
INSERT INTO dangky VALUES ('m5', '20042325', 8);
INSERT INTO dangky VALUES ('m5', '20152016', 10);
INSERT INTO dangky VALUES ('m6', '20142012', 10);
INSERT INTO dangky VALUES ('m7', '20142014', 6);
INSERT INTO dangky VALUES ('m7', '20142012', 2);

-- a Đưa ra tên của các môn học
SELECT DISTINCT `tenmh`
FROM `monhoc`;

-- b Đưa ra MS, Họtên, Ngày sinh của các sinh viên ở Hà nội
SELECT `mssv`, `hoten`, `ngaysinh`
FROM `sinhvien`
WHERE `quequan` = 'ha noi';

-- c Đưa ra mã số của các sinh viên đăng ký học môn học có mã số M1 hoặc M2
SELECT DISTINCT `mssv`
FROM `dangky`
WHERE `msmh` = 'm1' OR `msmh` = 'm2';

-- d Đưa ra tên của môn học mà sinh viên có mã số 20042325 học
SELECT `tenmh`
FROM
	`monhoc` AS mh
    INNER JOIN `dangky` AS dk ON dk.`msmh` = mh.`msmh`
WHERE `mssv` = '20042325';

-- e Đưa ra tên của các sinh viên đăng ký học ít nhất một môn do giảng viên Lê Quân dạy
SELECT DISTINCT
	sv.`hoten`
FROM
	`dangky` AS dk
    INNER JOIN `sinhvien` AS sv ON dk.`mssv` = sv.`mssv`
    INNER JOIN `monhoc` AS mh ON dk.`msmh` = mh.`msmh`
WHERE mh.`tengv` = 'Le Quan';

-- f Đưa ra tên các môn mà sinh viên Nguyễn Văn A học và điểm tương ứng của các môn đó cho sinh viên này
SELECT DISTINCT
	mh.`tenmh`, dk.`diem`
FROM
	`dangky` AS dk
    INNER JOIN `sinhvien` AS sv ON dk.`mssv` = sv.`mssv`
    INNER JOIN `monhoc` AS mh ON dk.`msmh` = mh.`msmh`
WHERE sv.`hoten` = 'Nguyen Van A';

-- g Đưa ra mã số của các sinh viên học tất cả các môn mà giảng viên Lê Quân có dạy
SELECT `mssv`
FROM
	(SELECT DISTINCT
		T2.`mssv`, T2.`msmh`
	FROM
		(SELECT DISTINCT mh.`msmh`
		FROM
			`dangky` AS dk
			INNER JOIN `monhoc` AS mh ON  dk.`msmh` = mh.`msmh`
		WHERE mh.`tengv` = 'Le Quan'
		) AS T1 
		JOIN (SELECT `mssv`, `msmh`
			FROM `dangky`
			ORDER BY `mssv`
			) AS T2 ON T1.`msmh` = T2.`msmh`) AS T
GROUP BY `mssv`
HAVING COUNT(`mssv`) = (SELECT COUNT(*)
						FROM (SELECT DISTINCT mh.`msmh`
							FROM
								`dangky` AS dk
								INNER JOIN `monhoc` AS mh ON  dk.`msmh` = mh.`msmh`
							WHERE mh.`tengv` = 'Le Quan') AS T3);
                            
-- h Đưa ra tên của các môn học không được sinh viên nào đăng ký học
SELECT `tenmh`
FROM `monhoc`
WHERE `msmh` NOT IN (SELECT DISTINCT `msmh`
					FROM `dangky`);
                    
-- i Những sinh viên nào có đăng ký học từ 5 môn trở lên
SELECT `mssv`
FROM (SELECT `mssv`, COUNT(*) AS Somh
	FROM `dangky`
	GROUP BY `mssv`) AS T
WHERE Somh >= 5;

-- j Điểm trung bình của sinh viên Nguyễn Văn A là bao nhiêu?
SELECT DISTINCT
	AVG(dk.`diem`)
FROM
	`dangky` AS dk
    INNER JOIN `sinhvien` AS sv ON dk.`mssv` = sv.`mssv`
    INNER JOIN `monhoc` AS mh ON dk.`msmh` = mh.`msmh`
WHERE sv.`hoten` = 'Nguyen Van A';

-- k Sinh viên nào đạt điểm cao nhất cho môn CSDL?
SELECT MAX(`diem`)
FROM (SELECT `diem`
	FROM 
		`dangky` AS dk
        INNER JOIN `monhoc` AS mh ON dk.`msmh` = mh.`msmh`
    WHERE mh.`tenmh` = 'CSDL') AS T
	