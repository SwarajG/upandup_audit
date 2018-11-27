// const router = require('express').Router();
// const passport = require('passport');
// const passportConfig = require('./configure/passport-setup');

// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// passport.deserializeUser((id, done) => {
//   getUserById(id, (err, user) => {
//     done(err, user);
//   });
// });

// router.post('/register', (req, res) => {
//   const { name, password, cfmPassword } = req.body;
// });

// router.get('/login', (req, res) => {
//   console.log('Logging in with email...');
// });

// router.post('/login', passport.authenticate('local', {
//   failureRedirect: '/logout',
//   failureFlash: true
// }), (req, res) => {
//   req.flash('success_message', 'You are now Logged in!!');
//   res.redirect('/');
// });

// router.get('/logout', function(req, res){
//   req.logout();
//   req.flash('success_message', 'You are logged out');
//   res.redirect('/users/login');
// });

// router.get('/google', passport.authenticate('google', {
//   scope: ['profile']
// }, () => {
//   console.log('Hello World');
// }));

// router.get('/google/redirect', (req, res) => {
//   res.send('Logging in with google...');
// });

// router.get('/facebook', (req, res) => {
//   res.send('Logging in with facebook...');
// });

// router.get('/logout', (req, res) => {
//   res.send('Logging out...');
// });

// module.exports = router;