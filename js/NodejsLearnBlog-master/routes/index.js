var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Ejs',
     success : req.flash('success').toString(),
     error : req.flash('error').toString()
   });
});

/* GO TO REGISTER PAGE */ 
router.get('/reg', function(req, res, next) {
  res.render('reg', {
    title: 'Register',
    success : req.flash('success').toString(),
    error : req.flash('error').toString()
  })
});

/* CHECK PASSWORD  */
router.post('/reg', function(req, res) {
  if(req.body['reg_username'] === '') {
    req.flash('error', 'User name is require field.');
    return res.redirect('/reg');
  }
  if(req.body['reg_check_password'] != req.body['reg_password']) {
    req.flash('error', 'Two password are not same.');
    return res.redirect('/reg');
  }
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body['reg_password']).digest('base64');

  var newUser = new User({
    name: req.body['reg_username'],
    password: password
  });

  User.get(newUser.name, function(err, user) {
    if(user)
      err = 'Username already exists';
    if (err) {
      req.flash('error', err);
      return res.redirect('/reg');
    }

    newUser.save(function(err){
      if(err){
        req.flash('error', err);
        return res.redirect('/reg');
      }
      req.session.user = newUser;
      req.flash('success', 'Register success!');
      res.redirect('/');
    });
  });
});

module.exports = router;
