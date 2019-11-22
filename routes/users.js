var express = require('express');
var router = express.Router();
const passport = require('passport')

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/login');
}

router.get('/', isLoggedIn, (req,res) => {
    res.render('home',{
        user : req.user
    });
});

router.get('/register',(req,res) => {
    res.render('register');
})

router.post('/register', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/users/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/login',(req,res) => {
  res.render('login')
});

router.post('/login',passport.authenticate('local-login',{
      successRedirect : '/users',
      failureRedirect : '/users/login',
      failureFlash: true
  }
));

module.exports = router
