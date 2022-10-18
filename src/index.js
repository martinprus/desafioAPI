const express = require("express");
const productRouter = require("./routers/productRouter");
const viewsRouter = require("./routers/viewsRouter");
const handlebars = require("express-handlebars");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

const PORT = 8080;

app.use("/api/productos", productRouter);
app.use("/", viewsRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
