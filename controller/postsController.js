const postsModel = require("../model/postsModel");
const formidable = require("formidable");
module.exports = {
  getPostsData(req, res) {
    postsModel.getPostsData(data => {
      res.json({
        code: 200,
        msg: "成功",
        data
      });
    });
  },
  getPostsList(req, res) {
    // let {pagesize,pagenum} = obj
    let query = req.query;
    console.log(query);
    postsModel.getPostsList(query, data => {
      res.json({
        code: 200,
        msg: "成功",
        data
      });
    });
  },
  getSectionData(req, res) {
    postsModel.getSectionData(result => {
      res.json({
        code: 200,
        msg: "成功获取数据",
        result
      });
    });
  },
  uploadFile(req, res) {
    // 使用formidable实现文件上传
    let form = new formidable.IncomingForm();
    // 配置
    form.encoding = "utf-8";
    form.keepExtensions = true;
    form.uploadDir = "./uploads";
    // 实现文件上传操作
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.json({
          code: 400,
          msg: "文件上传失败"
        });
      } else {
        res.json({
          code: 200,
          msg: "文件上传成功",
          fields,
          files
        });
      }
    });
  },
  addPost(req, res) {
    let obj = req.body;
    obj.user_id = req.session.currentUser.id;
    obj.id = null;
    obj.views = 0;
    obj.likes = 0;
    console.log(obj);
    postsModel.addPost(obj, (err, result) => {
      if (err) console.log(err);
      else {
        res.json({ code: 200, msg: "新增数据成功" });
      }
    });
  }
};
