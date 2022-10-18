const express = require("express");
const viewsRouter = express.Router();
const productApi = require("../API/ProductApi");

viewsRouter.get("/", (req, res) => {
  res.render("form-products");
});

viewsRouter.get("/productos", (req, res) => {
  const productos = productApi.getAll();
  res.render("product-list", { productos: productos });
});

module.exports = viewsRouter;
