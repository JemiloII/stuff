var routeMiddleware = {
  checkAuthentication: function(req, res, next) {
    // can use req.isAuthenticated() for this too..
    if (!req.user) {
      res.render('users/login', {message: "Please log in first"});
    }
    else {
     return next();
    }
  },

  currentUser: function(req, res, next) {
    // if the user is authenticated (passport method returns true when serialized)
    if (req.isAuthenticated()) {
      // this is available in the view for all requests, deserializing FTW
      res.locals.currentUser = req.user;
      next();
    }
    next();
  },

  preventLoginSignup: function(req, res, next) {
    if (req.user) {
      res.redirect('/users/home');
    }
    else {
     return next();
    }
  }
};
module.exports = routeMiddleware;