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
                alert('恭喜登录成功')
                location.href = '../../admin/index.html'
              //   $('#tips').show(300).delay(1000).fadeOut(1000)
              // $('#tips').html('恭喜登录成功')
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

// $(function() {
//   $(".btnlogin").on("click", function() {
//     $.post(
//       "/login",
//       $("form").serialize(),
//       function(res) {
//         console.log(res);
//       },
//       "json"
//     );
//   });
// });
