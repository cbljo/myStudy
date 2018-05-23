
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/posts')
});
router.get('/test',function (req,res) {
    res.render('index', {
        title: 'Express',
        //user: req.session.user,
    })
});
router.use('/signup', require('./signup'))
router.use('/signin', require('./signin'))
router.use('/signout', require('./signout'))
router.use('/posts', require('./posts'))
router.use('/comments', require('./comments'))

module.exports = router;

