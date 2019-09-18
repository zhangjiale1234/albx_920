const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const router = require('./router');
app.listen(8899,()=>{
    console.log('http://127.0.0.1:8899')
})
//管理静态资源
app.use('/assets',express.static('assets'))
app.use('/views',express.static('views'))
app.use('/uploads',express.static('uploads'))
//引入配置ejs
app.set('view engine','ejs')
app.set('views','views')

//注册body-parser
app.use(bodyParser.urlencoded({extended:false}))

//注册路由
app.use(router)
