const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");
const session = require("express-session");
// const session = require('express-session');
app.listen(5555, () => {
  console.log("http://127.0.0.1:5555");
});

app.use(
  session({
    secret: "随便加点内容123",
    resave: false,
    saveUninitialized: false
  })
);
// 设置一个session
// 设置一个路由中间件
// app.use((req, res, next) => {
//   if(req.session.isLogin &&req.session.isLogin == 'true'){
//     //   res.end('welcome back')
//       next()
//   }
//   else{

//   }
// });

app.get("/", (req, res) => {
    //一进网页，就应该判断是否有这个东西，如果没有就是first，显示完在给他加上去
    if(req.session.isLogin && req.session.isLogin == 'true'){
        res.end('welcome back')
    }
    else{
        req.session.isLogin = 'true'
        res.end('first')
        console.log(req.session.isLogin)
        
    }

});
