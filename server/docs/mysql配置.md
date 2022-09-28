# 导入mysql 模块

```js
const mysql = require('mysql');

//建立与mysql数据库的连接
const db = mysql.createPool({
    host : '127.0.0.1', // 数据库的IP地址
    user : 'root',      //登录数据库的账号
    password : 'root',      //登录数据库的密码
    database :'my_db_01'       //指定要操作哪个数据库
})
## 1.测试mysql模块是否正常工作
db.query('select 1',(err,results)=>{
    if(err) return console.log(err.message);

    console.log(results);
})

## 查询用户表所有数据  select语句results是一个数组
const sqlSelect = 'select * from users'
db.query(sqlSelect,(err,results)=>{
    if(err) return console.log(err.message);
    console.log(results);
})


## 2.插入数据
//要插入到users表的对象
const user = {username : 'laotie', password : 'admin123'};
//待执行的sql语句，其中引文的？表示占位符
const sqlInsert = 'insert into users (username,password) values (?,?)'
//使用数组的形式，依次为？占位符指定具体的值
db.query(sqlInsert,[user.username,user.password],(err,results)=>{
    if (err) return console.log(err.message);
    //如果执行的是insert into 语句  则results是一个对象 包含了affectedRows（影响的行数）的属性
    //可以用affectedRows属性来判断是否插入成功
    if(results.affectedRows === 1 ){console.log('插入数据成功')}
})

## 3.插入数据的便捷方式
const user1 = {username : 'laotie2', password : 'admin123'};
//待执行的sql语句，其中引文的？表示占位符  多个占位符需要使用数组为没给占位符指定值
const sqlInsertTwo = 'insert into users set ?'
//直接将数据对象当做占位符的值
db.query(sqlInsertTwo,user1,(err,results)=>{
    if (err) return console.log(err.message);
    //如果执行的是insert into 语句  则results是一个对象 包含了affectedRows（影响的行数）的属性
    //可以用affectedRows属性来判断是否插入成功
    if(results.affectedRows === 1 ){console.log('插入数据成功')}
})



## 4.更新update数据
const  id = { id : 2004}
const  user2 = {username :'yangyating',password:'group2020'};
const sqlUpdate = 'update users set ? where ?'
db.query(sqlUpdate,[user2,id],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows === 1 ){console.log('更新成功');}
})

## 5.删除数据  DELETE

 const idTwo  = {id : 2002};
 const sqlDELETE = 'delete from users where ?'
 db.query(sqlDELETE,idTwo,(err,results)=>{
    if(err) return console.log(err.message);
    //执行delete语句结果也是一个对象包含affectedRows属性
    if(results.affectedRows === 1) {
        console.log('删除成功' + '删除'+ results.affectedRows + '条记录');
    }
 })
```