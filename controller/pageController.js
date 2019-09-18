const model = require('../model/pageModel');
module.exports = {
    getIndexPage(req,res){
        res.render('index',{})
    }
}