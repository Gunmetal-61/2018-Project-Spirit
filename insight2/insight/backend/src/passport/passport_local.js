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

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "passwd",
      passReqToCallback: true, // optional
      session: false //will use in the future
    },
    function(req, username, password, done) {
      // authentication
      // currently bypassing
      console.log(username, password);
      return done(null, { user: "joe" });
    }
  )
);

module.exports = {
  passport: passport,
  passport_local: passport.authenticate("local", {
    failureRedirect: "/failedToAuth"
  })
};
