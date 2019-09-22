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
    },
    getPostsList(req,res){
        // let {pagesize,pagenum} = obj
        let query = req.query
        console.log(query)
        postsModel.getPostsList(query,(data)=>{
            res.json({
                code:200,
                msg:'成功',
                data
            })
        })
    },
    getSectionData(req,res){
        postsModel.getSectionData((result)=>{
            res.json({
                code:200,
                msg:'成功获取数据',
                result
            })
        })
    },
    // searchPostsData(req,res){
    //     let bd = req.body
    //     console.log(bd)
    //     postsModel.searchPostsData(bd,(err,result)=>{
    //         if(err) return err
    //         res.json({code:200,msg:'成功'})
    //     })
    // }
    
}