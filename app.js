const path = require("path");
const express = require("express");
const session = require("express-session");

app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./public");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

const { isAuthenticated } = require("./middleware/isAuthenticated");

const indexRouter = require("./routes/index/index.router");
const productRouter = require("./routes/product/product.router");
const authRouter = require("./routes/auth/auth.router");

app.use("/", authRouter);
app.use("/", isAuthenticated, indexRouter);
app.use("/product", isAuthenticated, productRouter);

module.exports = app;
