const getIndexPage = (req, res) => {
  res.render("pages/index.ejs");
};

module.exports = {
  getIndexPage,
};
