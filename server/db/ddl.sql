
CREATE TABLE `SiteInformation`
(
    `id`  tinyint(1) not null AUTO_INCREMENT  comment 'id',
    `visitors` smallint not null  default '0' comment '访客数',
    `traffic`  smallint not null  default '0' comment '访问量',
    `elapsedTime` datetime not null default CURRENT_TIMESTAMP  comment '运行时间',
    `createTime`  datetime not null  default CURRENT_TIMESTAMP comment '创建时间',
    PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1

INSERT into  SiteInformation (visitors,traffic) VALUES (0,0)