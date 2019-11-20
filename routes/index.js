var express = require('express');
var router = express.Router();

//首页
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

// //用户主页
// router.get('/my/:uid', function(req, res, next) {
//     res.render('my', { title: 'Express' });
// });
// //发表信息
// router.post('/post', function(req, res, next) {
//     res.render('post', { title: 'Express' });
// });
// //用户注册
// router.get('/reg', function(req, res, next) {
//     res.render('reg', { title: 'Express' });
// });
// //登陆
// router.post('/login', function(req, res, next) {
//     res.render('login', { title: 'Express' });
// });
// //登出
// router.get('/logout', function(req, res, next) {
//     res.render('logout', { title: 'Express' });
// });

module.exports = router;
