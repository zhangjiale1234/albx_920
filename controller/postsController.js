const postsModel = require('../model/postsModel');

module.exports = {
    getPostsData(req,res){
        postsModel.getPostsData((data)=>{
            res.json({
                code:200,
                msg:'成功',
                data,
            })
        })
    }
}