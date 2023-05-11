const express = require('express')
const app = express()
const port = 3000;
const mysql = require('mysql')


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');

    //DB作成//一度だけ。
    // con.query('CREATE DATABASE express_db',function (err,result){
    //     if (err) throw err;
    //     console.log('table created')
    // })


    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express_db' //追加
    });
  
    //テーブル作成
    // const sql = 'CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)';
    // con.query(sql,function(err,result){
    //     if (err) throw err;
    //     console.log('table created')
    // })

    
});

app.get('/',(req,res) => res.send('hellow worlddaaadd!'))
app.listen(port,() => console.log(`example on port ${port}`))