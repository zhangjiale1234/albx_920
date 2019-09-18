const express = require("express");
const router = express.Router();
const controller = require("./controller/pageController.js");

router.get("/", (req, res) => {
  controller.getIndexPage(req, res);
});
router.get("/detail.html", (req, res) => {
  controller.getDetailPage(req, res);
});
router.get("/list.html", (req, res) => {
  controller.getListPage(req, res);
});

//获取后台页面 统一约定以admin开头
router.get("/admin/categories.html", (req, res) => {
  controller.getCategoriesPage(req, res);
});
router.get("/admin/index.html", (req, res) => {
  controller.getAdminIndexPage(req, res);
});
router.get("/admin/comments.html", (req, res) => {
  controller.getCommentsPage(req, res);
});
router.get("/admin/login.html", (req, res) => {
  controller.getLoginPage(req, res);
});
router.get("/admin/nav-menus.html", (req, res) => {
  controller.getNavmenusPage(req, res);
});
router.get("/admin/password-reset.html", (req, res) => {
  controller.getPassworDresetPage(req, res);
});
router.get("/admin/post-add.html", (req, res) => {
  controller.getPostAddPage(req, res);
});
router.get("/admin/posts.html", (req, res) => {
  controller.getPostsPage(req, res);
});
router.get("/admin/profile.html", (req, res) => {
  controller.getProfilePage(req, res);
});
router.get("/admin/settings.html", (req, res) => {
  controller.getSettingsPage(req, res);
});
router.get("/admin/slides.html", (req, res) => {
  controller.getSlidesPage(req, res);
});
router.get("/admin/users.html", (req, res) => {
  controller.getUsersPage(req, res);
});


module.exports = router;
