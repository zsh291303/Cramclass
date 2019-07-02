SET NAME UTF8;
DROP DATABASE IF EXISTS cramc;
CREATE DATABASE cramc CHARSET=UTF8;
USE cramc;
#网站基本信息
CREATE TABLE cramc_site_info(
  site_name VARCHAR(16),
  logo VARCHAR(64),
  copyright VARCHAR(64)
);
#插入信息
INSERT INTO cramc_site_info VALUES("胜优","img","");
#导航条目
CREATE TABLE cramc_navbar_item(
  name VARCHAR(16),
  url VARCHAR(64),
  title VARCHAR(32)
);
#插入信息
INSERT INTO cramc_navbar_item VALUES("首页","/index.html","胜优首页"),
("年级","/index.html","适合年级"),
("精品课程","/index.html","精品课程"),
("教师","/index.html","名师风采"),
("优秀毕业生","/index.html","优秀毕业生");
#轮播图
CREATE TABLE cramc_carousel_item(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  url VARCHAR(128),
  title VARCHAR(32)
)
#插入
INSERT INTO cramc_carousel_item VALUES("NULL","img","/m1.html","文字1"),
("NULL","img","/m2.html","文字2"),
("NULL","img","/m3.html","文字3"),
("NULL","img","/m4.html","文字4")
#创建用户注册表
CREATE TABLE cramc_user_reg(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  uwpd VARCHAR(20),
  email VARCHAR(20),
  phone BIGINT,
  first_name VARCHAR(3),
  sex BOOL
);
INSERT INTO cramc_user_reg VALUES("NULL","king","123456","king@126.com","18615664589","张","1"),
("NULL","tom","597462","tom@126.com","18718526789","赵","0"),
("NULL","jerry","z45s80","jerry@126.com","15615489665","李","0"),
("NULL","ben","88s96f","ben@126.com","19865412598","钱","1");
#创建年级表
CREATE TABLE cramc_grade(
  gid INT PRIMARY KEY,
  grade VARCHAR(10),
  classname VARCHAR(200)
);
#插入数据
INSERT INTO cramc_grade VALUES("10","初一","数学，英语，物理，化学，地理"),
("20","初二","数学，英语，物理，化学，地理"),
("30","初三","数学，英语，物理，化学，地理"),
("40","高一","数学，英语，物理，化学，地理"),
("50","高二","数学，英语，物理，化学，地理");
#简历课程表
CREATE TABLE cramc_course();