const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu',
})

module.exports = {
    getLoginPage(email,callback){
        var sql = `select * from users where email = '${email}'`;
        connection.query(sql,(err,result)=>{
            err&&console.log(err)
            callback(result[0])
        })
    }
}