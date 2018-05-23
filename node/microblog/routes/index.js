var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello',function (req,res) {
    res.send('this time is '+ new Date().toString());
});
router.post('/post',function (req,res) {

});
router.get('/reg',function (req,res) {
    res.render('reg',{
        title:'用户注册'
    })
})
router.post('/reg',function (req,res) {

})
router.get('/login',function (req,res) {

})
router.post('/login',function (req,res) {

})
router.get('/logout',function (req,res) {

})
/*router.get('/user/:username',function (req,res) {
    res.send('user: '+req.params.username);
})*/
/*router.hello = function (req,res) {
    res.send('this time is '+ new Date().toString());
}*/

module.exports = router;
