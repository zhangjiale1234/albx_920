$(function(){
    $('.btnlogin').on('click',function(){
        $.ajax({
            type:'post',
            url:'/login',
            // serialize:可以收集当前指定的表单中所有拥有name属性的表单元素的value值
            data:$('form').serialize(),
            dataType:'json',
            success:function(res){
              
              if(res.code == 200){
                $('#tips').show(300).delay(1000).fadeOut(1000)
                  $('#tips').html('恭喜登录成功,请稍后')
                  location.href = '../../admin'
               
              }
              else{
                // alert('密码错误，请重试')
                $('#tips').show(100).delay(1000).fadeOut(1000)
              $('#tips').html('您输入的密码有误，请重试')
              }
            }
        })
    })
})


