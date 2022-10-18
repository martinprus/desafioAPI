const express = require("express");
const productRouter = express.Router();
const ProductApi = require("../API/ProductApi");

productRouter.get("/", (req, res) => {
  const products = ProductApi.getAll();
  res.send({ success: true, data: products });
});

productRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = ProductApi.getbyID(id);
  if (!product) {
    res.send({ success: false, data: "El ID no se encuentra en la lista." });
  } else {
    res.send({ success: true, data: product });
  }
});

productRouter.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  const product = ProductApi.save({ title, price, thumbnail });
  res.send({ success: true, productID: product.id });
});

productRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, thumbnail } = req.body;
  const product = ProductApi.update(id, { title, price, thumbnail });
  res.send({
    succes: true,
    data: { id: product.id, title: title, price: price, thumbnail: thumbnail },
  });
});

productRouter.delete("/:id", (req, res) => {
  ProductApi.delete(req.params.id);
  res.send({ success: true, productoeliminado: id });
});

module.exports = productRouter;
