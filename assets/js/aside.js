$(function() {
  //1.先获取到每一个的唯一标识 路由
  let str = location.href;
  let index = str.indexOf("?");
  //如果有参数
  if (index != -1) {
    // /str.substring 是从哪里开始切割，因为是不包括索引值，所以要加一在去切割
    //第二个参数就是切割多少位
    routername = str.substring(str.lastIndexOf("/") + 1, index);
  } else {
    //如果没有参数
    //    str.lastIndexOf('/')是一个索引值，找到之后返回一个索引值，
    //str.substring 是从哪里开始切割，因为是不包括索引值，所以要加一在去切割
    routername = str.substring(str.lastIndexOf("/") + 1);
  }
  //拿到每一个之后，就开始做判断
  if (
    routername == "posts" ||
    routername == "post-add" ||
    routername == "categories"
  ) {
    //
    //给a标签设置展开样式
    $("#menu-posts")
      .siblings("a")
      .removeClass("collapsed")
      .attr("aria-expanded", true);
    //给右边的小箭头设置一个旋转样式
    $("#menu-posts").addClass("in");
  } else if (
    routername == "nav-menus" ||
    routername == "slides" ||
    routername == "settings"
  ) {
    $("#menu-settings")
      .siblings("a")
      .removeClass("collapsed")
      .attr("aria-expanded", true);
    $("#menu-settings").addClass("in");
  }
  // - 添加active样式
  //只要把名字改成各自的路由，获取到点击的那一个 就可以给每一个都设置路由了
  $("#" + routername).addClass("active");
});
