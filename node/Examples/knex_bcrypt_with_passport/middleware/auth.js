var routeMiddleware = {
  checkAuthentication: function(req, res, next) {
    if (!req.isAuthenticated()) {
      req.flash('loginMessage', "Please log in first");
      res.redirect('/users/login');
    }
    else {
      next();
    }
  },

  currentUser: function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
  },

  preventLoginSignup: function(req, res, next) {
    if (req.user) {
      req.flash('loginMessage', "You are logged in already!");
      res.redirect('/users/home');
    }
    else {
      next();
    }
  }
};
module.exports = routeMiddleware;