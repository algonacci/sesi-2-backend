const express = require("express");
const router = express.Router();

const { getProducts, addProductPage, addProduct, editProduct, updateProduct, deleteProduct } = require("./product.controller");

router.route("/").get(getProducts);
router.route("/add").get(addProductPage);
router.route("/").post(addProduct);
router.route("/edit/:id").get(editProduct);
router.route("/update/:id").post(updateProduct);
router.route("/delete/:id").post(deleteProduct);

module.exports = router;
