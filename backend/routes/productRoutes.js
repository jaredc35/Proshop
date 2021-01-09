import express from "express";
const router = express.Router();
import Product from "../models/productModel";

app.get("/", async (req, res) => {
  const products = await Product.find({});
});

app.get("/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

export default Router;
