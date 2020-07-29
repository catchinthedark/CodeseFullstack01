drop database if exists `lesson2`;
create database `lesson2`;
use `lesson2`;

create table `product`(
	productID nvarchar(10) primary key,
    productName nvarchar(100),
    priceIn int,
    priceOut int,
    providerID nvarchar(10),
    categoryID nvarchar(10),
    productStatus nvarchar(20),
    productDiscription nvarchar(1000),
    imageURL nvarchar(100)
);
select * from `product`;
insert into `product` values ('1', 'hp probook 6470b', 4750000, 4350000, '1', 'laptop', 'in stock', 'good old laptop', '..\hpprobook6470b.png');
alter table `product`
	add salePercent float;
alter table `product`
	drop column salePercent;
delete from `product` where productID = '5';
update `product`
	set productStatus = 'out of stock' where productID = '1';

create table `user`(
	userID nvarchar(10) primary key,
    userName nvarchar(100),
    userAccount nvarchar(100),
    userPassword nvarchar(100),
	userInfo nvarchar(1000),
    userStatus nvarchar(20),
    avatarURL nvarchar(100),
    userRole nvarchar(10)
);
select * from `user`;
insert into `user` values ('20194849', 'Thach Thao', 'catchinthedark', '12345', 'no info found', 'offline', 'no URL found', 'user');
insert into `user` values('1', 'ManagerX', 'imyourmanager', '111', 'Im the website manager, nice to meet you', 'online', '..\managerX.png', 'manager');
delete from `user` where userID = '1';
update `user`
	set userStatus = 'online' where userID = '20194849';

create table `order`(
	orderID nvarchar(10) primary key,
    userID nvarchar(10),
    orderAdress nvarchar(1000),
    orderStatus nvarchar(20)
);
select * from `order`;
insert into `order` values ('1', '20194849', 'B11 KTT Kim Lien, Hoang Tich Tri', 'delivering');
update `order`
	set orderStatus = 'delivered' where orderID = '1';

create table `orderDetail`(
	orderID nvarchar (10),
    productID nvarchar(10),
    quantity int
);
select * from `orderDetail`;
insert into `orderDetail` values ('1', '1', 1);

create table `category`(
    categoryID nvarchar(100) primary key,
    productID nvarchar(10),
    categoryDiscription nvarchar(1000),
    imageURL nvarchar(100)
);
select * from `category`;
insert into `category` values ('laptop', '1', 'no discription found', '..\hpprobook6470b.png');







