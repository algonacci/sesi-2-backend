const { productRef } = require("../../db/firebase");

const getProducts = async (req, res) => {
  try {
    const snapshot = await productRef.get();
    const products = [];
    snapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    res.render("pages/product.ejs", { products });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const addProductPage = (req, res) => {
  res.render("pages/addProductPage.ejs");
};

const addProduct = async (req, res) => {
  try {
    const { name, description, imageUrl, price } = req.body;
    console.log(req.body);
    console.log(name);
    console.log(description);
    const newProductRef = productRef.doc();
    const newProduct = {
      name,
      description,
      imageUrl,
      price: Number(price),
      id: newProductRef.id,
    };
    await newProductRef.set(newProduct);
    res.redirect("/product");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const editProductRef = productRef.doc(productId);
    const productDoc = await editProductRef.get();
    if (!productDoc.exists) {
      res.sendStatus(404);
      return;
    }
    const productData = productDoc.data();
    res.render("pages/editProductPage.ejs", {
      product: productData,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateProductRef = productRef.doc(productId);
    const { name, description, imageUrl, price } = req.body;
    const updatedProduct = {
      name,
      description,
      imageUrl,
      price: Number(price),
    };
    await updateProductRef.update(updatedProduct);
    res.redirect("/product");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deleteProductRef = productRef.doc(productId);
    await deleteProductRef.delete();
    res.redirect("/product");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { getProducts, addProductPage, addProduct, editProduct, updateProduct, deleteProduct };
