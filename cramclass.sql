SET NAMES UTF8;
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
);
#插入
INSERT INTO cramc_carousel_item VALUES("NULL","img","/m1.html","文字1"),
("NULL","img","/m2.html","文字2"),
("NULL","img","/m3.html","文字3"),
("NULL","img","/m4.html","文字4");
#创建用户注册表
CREATE TABLE cramc_user_reg(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(20),
  email VARCHAR(20),
  phone VARCHAR(11),
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
  grade VARCHAR(10)
);
#插入数据
INSERT INTO cramc_grade VALUES("10","初一"),
("20","初二"),
("30","初三"),
("40","高一"),
("50","高二");
#简历课程表
CREATE TABLE cramc_course(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(20),
  course_grade VARCHAR(20),
  course_time VARCHAR(40),
  course_long VARCHAR(10),
  course_teacher VARCHAR(5),
  course_information VARCHAR(128),
  course_price DECIMAL(7,2),
  course_test BOOL,
  cramc_gid VARCHAR(10) 
);
#插入数据
INSERT INTO cramc_course VALUES("NULL","数学","初一","周末全天，周一至周五晚7点开始","120","林淼等","雄厚的师资力量，多年教学经验，狠抓重点要点","4999","1","10"),
("NULL","数学","初二","周末全天，周一至周五晚7点开始","120","林淼等","雄厚的师资力量，多年教学经验，狠抓重点要点","4999","1","20"),
("NULL","数学","初三","周末全天，周一至周五晚7点开始","120","林淼等","雄厚的师资力量，多年教学经验，狠抓重点要点","4999","1","30"),
("NULL","数学","高一","周末全天，周一至周五晚7点开始","120","林淼等","雄厚的师资力量，多年教学经验，狠抓重点要点","4999","1","40"),
("NULL","数学","高二","周末全天，周一至周五晚7点开始","120","林淼等","雄厚的师资力量，多年教学经验，狠抓重点要点","4999","1","50"),
("NULL","英语","初一","周末全天，周一至周五晚8点开始","144","王胜等","雄厚的师资力量，多年教学经验，狠抓重点要点，有定期外教交流","5999","1","10"),
("NULL","英语","初二","周末全天，周一至周五晚8点开始","144","王胜等","雄厚的师资力量，多年教学经验，狠抓重点要点，有定期外教交流","5999","1","20"),
("NULL","英语","初三","周末全天，周一至周五晚8点开始","144","王胜等","雄厚的师资力量，多年教学经验，狠抓重点要点，有定期外教交流","5999","1","30"),
("NULL","英语","高一","周末全天，周一至周五晚8点开始","144","王胜等","雄厚的师资力量，多年教学经验，狠抓重点要点，有定期外教交流","5999","1","40"),
("NULL","英语","高二","周末全天，周一至周五晚8点开始","144","王胜等","雄厚的师资力量，多年教学经验，狠抓重点要点，有定期外教交流","5999","1","50"),
("NULL","物理","初二","周末全天，周一至周五晚7点开始","96","普兰特等","雄厚的师资力量，多年教学经验，狠抓重点要点，紧密贴合考试要点","4599","1","20"),
("NULL","物理","初三","周末全天，周一至周五晚7点开始","96","普兰特等","雄厚的师资力量，多年教学经验，狠抓重点要点，紧密贴合考试要点","4599","1","30"),
("NULL","物理","高一","周末全天，周一至周五晚7点开始","96","普兰特等","雄厚的师资力量，多年教学经验，狠抓重点要点，紧密贴合考试要点","4599","1","40"),
("NULL","物理","高二","周末全天，周一至周五晚7点开始","96","普兰特等","雄厚的师资力量，多年教学经验，狠抓重点要点，紧密贴合考试要点","4599","1","50"),
("NULL","化学","初三","周末全天，周一至周五晚7点开始","120","林凯等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年带毕业生经验","4799","1","30"),
("NULL","化学","高一","周末全天，周一至周五晚7点开始","120","林凯等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年带毕业生经验","4799","1","40"),
("NULL","化学","高二","周末全天，周一至周五晚7点开始","120","林凯等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年带毕业生经验","4799","1","50"),
("NULL","地理","初一","周末全天，周一至周五晚7点开始","144","贾嘉等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年研究中高考等，紧跟命题步伐","4999","1","10"),
("NULL","地理","初二","周末全天，周一至周五晚7点开始","144","贾嘉等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年研究中高考等，紧跟命题步伐","4999","1","20"),
("NULL","地理","初三","周末全天，周一至周五晚7点开始","144","贾嘉等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年研究中高考等，紧跟命题步伐","4999","1","30"),
("NULL","地理","高一","周末全天，周一至周五晚7点开始","144","贾嘉等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年研究中高考等，紧跟命题步伐","4999","1","40"),
("NULL","地理","高二","周末全天，周一至周五晚7点开始","144","贾嘉等","雄厚的师资力量，多年教学经验，狠抓重点要点，多年研究中高考等，紧跟命题步伐","4999","1","50");
#创建精品课程表
CREATE TABLE cramc_course_great(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  gname VARCHAR(10),
  ginformation VARCHAR(256)
);
#插入数据
INSERT INTO cramc_course_great VALUES("NULL","高一数学",""),
("NULL","初三数学",""),
("NULL","高一英语",""),
("NULL","高二化学",""),
("NULL","初一物理",""),
("NULL","初一化学",""),
("NULL","高二化学","");
#创建报名表
CREATE TABLE user_join(
  jid INT PRIMARY KEY AUTO_INCREMENT,
  class_name VARCHAR(10),
  contact VARCHAR(5),
  phone VARCHAR(11),
  grade VARCHAR(10)
);
#插入数据
INSERT INTO user_join VALUES("NULL","数学","赵先生","18593665599","高一");
#创建名师介绍SI
CREATE TABLE cramc_teacher(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  tname VARCHAR(6),
  tclass VARCHAR(20),
  synopsis VARCHAR(256),
  tidea VARCHAR(125),
  tsaying VARCHAR(125)
);
#插入数据
INSERT INTO cramc_teacher VALUES("NULL","林淼","数学","毕业于山西师范大学，任教5年，学生成绩出众","寓教于乐，快乐学习","想学生所想，思学生所思");
#创建优秀学员表
CREATE TABLE cramc_stu(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  sname VARCHAR(5),
  grade VARCHAR(125),
  ssaying VARCHAR(100)
);
#插入数据
INSERT INTO cramc_stu VALUES("NULL","张三","以优异成绩被西南交通大学录取","快乐学习，快乐自己");