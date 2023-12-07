const { firebase } = require("../../db/firebase");

const loginPage = (req, res) => {
  res.render("pages/login.ejs");
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    req.session.uid = user.uid;
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Authentication failed. Please try again.");
  }
};

const logout = (req, res) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      req.session.destroy();
      res.redirect("/login");
    });
};

module.exports = { loginPage, login, logout };
