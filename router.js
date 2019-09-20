const express = require("express");
const router = express.Router();
const controller = require("./controller/pageController.js");
const userController = require("./controller/userController.js");
const postsController =require('./controller/postsController');

router.get("/", (req, res) => {
  controller.getIndexPage(req, res);
});
router.get("/detail", (req, res) => {
  controller.getDetailPage(req, res);
});
router.get("/list", (req, res) => {
  controller.getListPage(req, res);
});

//获取后台页面 统一约定以admin开头
router.get("/admin/categories", (req, res) => {
  controller.getCategoriesPage(req, res);
});
router.get("/admin", (req, res) => {
  controller.getAdminIndexPage(req, res);
});
router.get("/admin/comments", (req, res) => {
  controller.getCommentsPage(req, res);
});
router.get("/admin/login", (req, res) => {
  controller.getLoginPage(req, res);
});
router.get("/admin/nav-menus", (req, res) => {
  controller.getNavmenusPage(req, res);
});
router.get("/admin/password-reset", (req, res) => {
  controller.getPassworDresetPage(req, res);
});
router.get("/admin/post-add", (req, res) => {
  controller.getPostAddPage(req, res);
});
router.get("/admin/posts", (req, res) => {
  controller.getPostsPage(req, res);
});
router.get("/admin/profile", (req, res) => {
  controller.getProfilePage(req, res);
});
router.get("/admin/settings", (req, res) => {
  controller.getSettingsPage(req, res);
});
router.get("/admin/slides", (req, res) => {
  controller.getSlidesPage(req, res);
});
router.get("/admin/users", (req, res) => {
  controller.getUsersPage(req, res);
});
router.post("/login", (req, res) => {
  userController.getLoginPage(req, res);
});
router.get('/logout',(req,res)=>{
  userController.logoutAdminPage(req,res)
})
router.get('/getPostsData',(req,res)=>{
  postsController.getPostsData(req,res)
})

module.exports = router;
