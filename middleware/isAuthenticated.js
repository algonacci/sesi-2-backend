const isAuthenticated = (req, res, next) => {
  if (req.session?.uid) {
    return next();
  }
  res.redirect("/login");
};

module.exports = { isAuthenticated };
