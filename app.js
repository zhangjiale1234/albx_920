const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");
const session = require("express-session");
// const session = require('express-session');
app.listen(8899, () => {
  console.log("http://127.0.0.1:8899");
});
//管理静态资源
app.use("/assets", express.static("assets"));
app.use("/views", express.static("views"));
app.use("/uploads", express.static("uploads"));
//引入配置ejs
app.set("view engine", "ejs");
app.set("views", "views");

//配置服务器session，服务器默认不会启动session
app.use(
  session({
    secret: "随便加点内容123",
    resave: false,
    saveUninitialized: false
  })
);

app.use(function (req, res, next) {
       //证明已经登录过了
         // 直接执行下一步操作
         //路由是唯一的标识 所以我们要获取到路由 在去判断他怎么写
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1||req.url =='/'||req.url == '/list'||req.url == '/detail') {
        // 执行下一个操作
        next()
    }else{
        res.redirect('/admin/login')
    }
})

//注册body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//注册路由
app.use(router);
