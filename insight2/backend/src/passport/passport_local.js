const passport = require("passport");
LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function(user, done) {
  // please read the Passport documentation on how to implement this. We're now
  // just serializing the entire 'user' object. It would be more sane to serialize
  // just the unique user-id, so you can retrieve the user object from the database
  // in .deserializeUser().
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // Again, read the documentation.
  done(null, user);
});

/*
 *More official version of authenticating and verifying password
 *Searched via documentation (see link below)
 *http://www.passportjs.org/docs/facebook/
 */
passport.use(new LocalStrategy(
  function(req,username, password, done) {
    User.findOne({ username: req.body.username }, function(err, user) {
      if (err) { return done(err); }         //handles any other exceptions
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' }); //invalid username
      }
      if (!user.validPassword(req.body.password)) {
        return done(null, false, { message: 'Incorrect password.' }); //incorrect password
      }
      return done(null, user);      //supplies Passport with user that authenticated
    });
  }
));

module.exports = {
  passport: passport,
  passport_local: passport.authenticate("local", {
    failureRedirect: "/failedToAuth"
  })
};
