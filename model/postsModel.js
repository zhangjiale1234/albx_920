const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "baixiu",
  dateStrings: true
});

module.exports = {
  getPostsData(callback) {
    let sql = `select posts.*,users.nickname,categories.name
    from posts,categories,users
    where posts.user_id = users.id and posts.category_id = categories.id`;
    conn.query(sql, (err, result) => {
      err && console.log(err);
      callback(result);
      console.log(result);
    });
  },
  getPostsList(query, callback) {
    // let sql = `select posts.*,users.nickname,categories.name
    // from posts
    // join users on posts.user_id = users.id
    // join categories on posts.category_id = categories.id
    // limit ${(query.pageNum-1)*query.pageSize},${query.pageSize}`
    let sql = `select posts.*,users.nickname,categories.name
        from posts
        join users on posts.user_id = users.id
        join categories on posts.category_id = categories.id
        where 1=1 `; // 恒成立
    // 拼接筛选条件
    if (query.cate && query.cate != "all") {
      // 说明有分类条件
      sql += ` and posts.category_id = ${query.cate} `;
    }
    if (query.statu && query.statu != "all") {
      sql += ` and posts.status = '${query.statu}' `;
    }

    sql += ` order by posts.id DESC
limit ${(query.pageNum - 1) * query.pageSize},${query.pageSize}`;
    conn.query(sql, (err, result) => {
      // err&&console.log(err)
      if (err) return err;
      else {
        sql = 'select count(*) as cnt from posts where 1=1 '
        if(query.cate && query.cate != 'all'){ // 说明有分类条件
            sql += ` and posts.category_id = ${query.cate} `
        }
        if(query.statu && query.statu != 'all'){
            sql += ` and posts.status = '${query.statu}' `
        }
        conn.query(sql, (err2, result2) => {
          if (err2) return err;
          else {
            callback({ data: result, cnt: result2[0].cnt });
          }
        });
      }
    });
  },
  getSectionData(callback) {
    let sql = `select * from categories`;
    conn.query(sql, (err, data) => {
      err && console.log(err);
      callback(data);
    });
  }

};
