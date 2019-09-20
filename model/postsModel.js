const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu',
})

module.exports = {
    getPostsData(callback){
    let sql =  `select posts.*,users.nickname,categories.name
    from posts,categories,users
    where posts.user_id = users.id and posts.category_id = categories.id`
        conn.query(sql,(err,result)=>{
            err&&console.log(err)
            callback(result)
        })
    }
}