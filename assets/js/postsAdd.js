$(function() {
    $('#feature').on('change',function(){
        //创建formdata对象，
        let myfile = $("#feature")[0].files[0];
        // console.log($("#feature")[0].files[0])
        let formdata = new FormData();
        formdata.append("img", myfile);

        $.ajax({
            url:'/uploadFile',
            dataType:'json',
            type:'post',
            processData:false,
            contentType:false,
            data:formdata,
            success:function(res){
                // console.log(res.files.img.path)

                if(res.code == 200 ){
                    //把上传回来的东西放到隐藏域去 方便后面的提取
                    $('#hidden-feature').attr('src',res.files.img.path)
                    //把路径也存到里面，方便以后使用
                    $('#hidden-feature').val(res.files.img.path)
                    //在把图片显示出来
                    $('.thumbnail').attr('src','/'+res.files.img.path).show()
                }
            }
        })
    })


    // 富文本域初始化
    CKEDITOR.replace('content')
    //把文本框的内容放到隐藏域里面？
    $('.btn-primary').on('click',function(){
        //updateElement()用来同步数据
        //点击的时候实现数据同步
    CKEDITOR.instances.content.updateElement()
        //点击保存后收集出所有数据 发送ajax请求
        console.log($('form').serialize())
        $('#hidden-feature').val()
        $.ajax({
            type:'post',
            url:'/addPost',
            //传参
            data:$('form').serialize(),
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    alert('新增数据成功')
                    location.href = '/admin/posts'
                }
            }
        })
    })

    
  


});
