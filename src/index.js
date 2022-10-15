const express = require("express");
const productRouter = require("./routers/productRouter");

const app = express();
const PORT = 8080;
app.use(express.json())

app.use("/api/productos", productRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
