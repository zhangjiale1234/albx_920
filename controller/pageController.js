const model = require('../model/pageModel');
const querystring = require('querystring');
module.exports = {
    getIndexPage(req,res){
        res.render('index.ejs')
    },
    getDetailPage(req,res){
        res.render('detail')
    },
    getListPage(req,res){
        res.render('list')
    },
    getCategoriesPage(req,res){
        res.render('admin/categories')
    },
    getAdminIndexPage(req,res){
            res.render('admin/index')
        // let obj = querystring.parse(req.headers.cookie)
        // if(obj.isLogin&&obj.isLogin == 'true'){
        //     res.render('admin/index')
        // }
        // else{
        //     res.redirect('../admin/login.html')
        // }
    },
    getCommentsPage(req,res){
        res.render('admin/comments')
    },
    getLoginPage(req,res){
        res.render('admin/login')
    },
    getNavmenusPage(req,res){
        res.render('admin/nav-menus')
    },
    getPassworDresetPage(req,res){
        res.render('admin/password-reset')
    },
    getPostAddPage(req,res){
        res.render('admin/post-add')
    },


    getPostsPage(req,res){
        res.render('admin/posts')
    },
    getProfilePage(req,res){
        res.render('admin/profile')
    },
    getSlidesPage(req,res){
        res.render('admin/slides')
    },
    getUsersPage(req,res){
        res.render('admin/users')
    },
    getSettingsPage(req,res){
        res.render('admin/settings')
    },
    

}