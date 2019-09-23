$(function() {
  $("#feature").on("change", function() {
    //创建formdata对象，
    let myfile = $("#feature")[0].files[0];
    // console.log($("#feature")[0].files[0])
    let formdata = new FormData();
    formdata.append("img", myfile);

    $.ajax({
      url: "/uploadFile",
      dataType: "json",
      type: "post",
      processData: false,
      contentType: false,
      data: formdata,
      success: function(res) {
        // console.log(res.files.img.path)

        if (res.code == 200) {
          //把上传回来的东西放到隐藏域去 方便后面的提取
          $("#hidden-feature").attr("src", res.files.img.path);
          //把路径也存到里面，方便以后使用
          $("#hidden-feature").val(res.files.img.path);
          //在把图片显示出来
          $(".thumbnail")
            .attr("src", "/" + res.files.img.path)
            .show();
        }
      }
    });
  });
  let str = location.search;
  let id = getId(str);
  //初始化创建一个富文本框来覆盖原本的文本框对象
  CKEDITOR.replace("content");

  //判断一下是否有id 有id就是编辑 没有就是新增
  if (id) {
    $.ajax({
      url: "/getPostsAddData",
      dataType: "json",
      data: {
        id
      },
      success:function(res){
          console.log(res)
          if(res.code == 200 ){
              //把所有数据渲染上去
              $('#title').val(res.result.title)
              $('#content').val(res.result.content)
              $('#slug').val(res.result.slug)
              $('#slug').val(res.result.slug)
              $('#category_id').val(res.result.category_id)
              $('#status').val(res.result.status)
              $('.thumbnail').attr('src','/'+res.result.feature).show()
              // 时间:将之前的日期转换为指定的yyyy-MM-ddThh:mm格式
              $('#created').val(res.result.created)
              $('[name=id]').val(res.result.id)
          }
      }
    });
    postsAddOrEdit('/editPostsData')
  } else {
    //把文本框的内容放到隐藏域里面？
    postsAddOrEdit('/addPost')
  }

//增加文章 或者是编辑文章 以id作为依据
//url 是路由路径参数
  function postsAddOrEdit(url){
    $(".btn-primary").on("click", function() {
        console.log(2)
      //updateElement()用来同步数据
      //点击的时候实现数据同步
      CKEDITOR.instances.content.updateElement();
      //点击保存后收集出所有数据 发送ajax请求
      console.log($("form").serialize());
      $("#hidden-feature").val();
      $.ajax({
        type: "post",
        url: url,
        //传参
        data: $("form").serialize(),
        dataType: "json",
        success: function(res) {
          console.log(res);
          if (res.code == 200) {
            alert("新增数据成功");
            location.href = "/admin/posts";
          }
        }
      });
    });
  }


  // 富文本域初始化
 
  //封装获取id的函数
  //str一个地址栏后面的第一locaition.search
  function getId(str) {
    str = str.substring(1);
    let strobj = {};
    let arr = [];
    arr = str.split("&");
    arr.forEach((e, i) => {
      let temp = e.split("=");
      strobj[temp[0]] = temp[1];
    });
    console.log(strobj.id);
    return strobj.id;
  }

});
