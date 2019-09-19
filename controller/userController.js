const userModel = require('../model/userMolde');
module.exports = {
    getLoginPage(req,res){
        let {email,password} = req.body
        userModel.getLoginPage(email,(result)=>{
            console.log(result)
            if(result!=undefined){
                if(result.password ==password){
                    res.json({code:200,msg:'成功'})
                }
                else{
                    res.json({code:400,msg:'密码输入错误'})
                }
            }
            else{
                res.json({code:500,msg:'请输入正确的邮箱地址'})
            }
        })
    }
}