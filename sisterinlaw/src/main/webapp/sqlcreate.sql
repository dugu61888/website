create table if not exists company_info{
	id bigint not null primary key auto_increment ,
	company_name varchar(30) not null default '' comment '公司名称',
    describtion  text   comment '公司描述',
    updatetime  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
} ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='公司信息表'




create table if not exists questions(
	id bigint not null primary key auto_increment ,
	question varchar(100) not null default '' comment '问题',
    answer  text   comment '回答',
    updatetime  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='问题表'



create table if not exists product(
	id bigint not null primary key auto_increment,
	name varchar(100) not null default '' comment '名称',
    intronduce  text   comment '产品介绍',
    location    varchar(100) comment '图片地址',
    updatetime  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='产品表'