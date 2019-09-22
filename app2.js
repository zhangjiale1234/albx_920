const express = require("express");
const app = express();
const querystring = require('querystring');
// const session = require('express-session');
app.listen(8888, () => {
  console.log("http://127.0.0.1:8888");
});



app.get('/',(req,res)=>{
  // console.log(req.header.cookie)
  
  var obj = querystring.parse(req.headers.cookie);
  console.log(obj);
  // 如果是后续请求，就显示welcome back -- 访问其它的后台页面
  if (obj.isLogin && obj.isLogin == "true") {
    res.end("welcome back");
  }
  else{
    res.end("first");
    // obj.isLogin ='true'
    res.writeHead(200, {    
      "Set-Cookie": "isLogin=true"
    });
  }
  // res.writeHead(200, {    
  //   "Set-Cookie": "isLogin=true"
  // });
  // res.send('ok')
})