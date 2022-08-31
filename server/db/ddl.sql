-- 站点信息表
CREATE TABLE `MY_siteInfo`
(
    `id`  tinyint(1) not null AUTO_INCREMENT  comment 'id',
    `visitors` smallint not null  default '0' comment '访客数',
    `traffic`  smallint not null  default '0' comment '访问量',
    `elapsedTime` datetime not null default CURRENT_TIMESTAMP  comment '运行时间',
    `createTime`  datetime not null  default CURRENT_TIMESTAMP comment '创建时间',
    `updateTime`  datetime null  comment '更新时间',
    PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1;
INSERT into  MY_siteinfo (visitors,traffic) VALUES (0,0);

-- 地址信息表
CREATE TABLE `MY_address`
(
    `id` tinyint(1) not null AUTO_INCREMENT comment 'id',
    `ipAddress` char(200) null comment 'IP地址',
    `createTime` datetime not null default CURRENT_TIMESTAMP comment '创建时间',
    PRIMARY KEY (`id`)
) ENGINE = InnODB AUTO_INCREMENT = 1;

-- 同步站点信息过程
DROP procedure if exists `up_sync_siteInfo`;
CREATE DEFINER=`root`@`localhost` PROCEDURE `up_sync_siteInfo`()
BEGIN
    /*
     存储过程名称:同步MY_siteInfo表信息
     作者:Ea
     说明:通过MY_address表记录条目同步MY_siteInfo中traffic字段
     */
    DECLARE
        cnt INT DEFAULT ( 0 );
    SELECT
        COUNT( ipAddress ) INTO cnt
    FROM
        MY_address;
    IF
        (
                    cnt != 0
                AND cnt != ""
                AND cnt IS NOT NULL
            ) THEN
        UPDATE MY_siteinfo
        SET visitors = cnt,
            updataTime = CURRENT_TIMESTAMP
        WHERE
                id = 1;

    END IF;

END