$(function() {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:8899/getPostsData",
    success: function(res) {
      if (res.code == 200) {
        let html = template("postsListTemp", res.data.data);
        $("#tbody").html(html);
      }
    }
  });
      // 每页记录数     当前页码
      var pageSize = 2,pageNum = 1
  function init(obj) {
    $.ajax({
      dataType: "json",
      type: "get",
      data: { pageNum, pageSize,...obj},
      url: "/getPostsList",
      success: function(res) {
        if (res.code == 200) {
          console.log(res.data.cnt)
          $("tbody").html(template("postsListTemp", res.data.data));
           // 生成分页结构  总记录数/每页条数
          setPage(Math.ceil(res.data.cnt / pageSize));
          // setPage(Math.ceil(res.data.cnt / pageSize))
        }
      }
    });
  }
  init();

  function setPage(total) {
    $(".pagination").bootstrapPaginator({
        //设置版本号
        bootstrapMajorVersion: 3,
        // 显示第几页
        currentPage: pageNum,
        // 总页数
        totalPages: total,
        //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
        onPageClicked: function (event,originalEvent,type,page) {
            // page:这就是当前你所需要的页码数据，我们只需要让ajax以这个页码数据做为标准再次发起请求获取数据生成动态结构
            // 修改全局页码
            pageNum = page
            // 重新获取数据生成动态结构
            var obj = {
                cate:$('.cateSelector').val(),
                statu:$('.statuSelector').val()
            }
            init(obj)
        }
    })
}


  $.ajax({
    type:'get',
    url:'/getSectionData',
    dataType:'json',
    success:function(res){
      if(res.code==200){
        let html = '<option value="all">所有状态</option>';
        res.result.forEach(e=>{
          html += `<option value="${e.id}">${e.name}</option>`
        })
        console.log(html)
        $('.cateSelector').html(html)
      }
    }
  })

  $('.btn-search').on('click',function(){
    // console.log(1)
    //收集数据 发送ajax请求
    let cate = $('.cateSelector').val()
    let statu = $(".statuSelector").val()
    // $.ajax({
    //   url:'/searchPostsData',
    //   type:'post',
    //   dataType:'json',
    //   data:{cate,statu},
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    let obj = {cate,statu}
    pageNum = 1
    init(obj)
  })

});
