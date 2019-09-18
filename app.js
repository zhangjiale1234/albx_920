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
//引入配置ejs
app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)

//注册路由
app.use(router)
