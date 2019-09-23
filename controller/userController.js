const userModel = require("../model/userMolde");
const querystring = require("querystring");
const session = require("express-session");
module.exports = {
  getLoginPage(req, res) {
    let { email, password } = req.body;
    userModel.getLoginPage(email, result => {
      if (result) {
        if (result.password == password) {
          req.session.isLogin = "true";
          req.session.currentUser = result;
          console.log(result);
          // req.session = result
          res.json({ code: 200, msg: "成功" });
        } else {
          res.json({ code: 400, msg: "错误" });
        }
      } else {
        res.end({ code: 500, msg: "失败" });
      }
    });
  },
  logoutAdminPage(req, res) {
    req.session.isLogin = "";
    res.json({
      code: 200,
      msg: "登出成功"
    });
  }
};
