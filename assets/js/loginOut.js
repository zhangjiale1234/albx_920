$(function(){
    $('.appExit').on('click',function(){
        $.ajax({
            url:'http://127.0.0.1:8899/logout',
            success:function(res){
                console.log(res)
                if(res.code === 200){
                    if(!confirm('您是否要退出登录?')) return
                    alert('登出成功')
                    location.href = '/admin/login'
                }
            }
        })
    })
})