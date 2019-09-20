$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8899/getPostsData',
        success : function(res){
            if(res.code == 200){
                let html = template('template',res)
                console.log(res)
                console.log(html)
                $('#tbody').html(html)
            }
        }
    })
})