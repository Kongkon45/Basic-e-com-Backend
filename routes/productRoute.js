const express = require("express");
const { getAllProducts, getProduct, createProdcut, updateProduct, deleteProduct } = require("../controller/productsController");

const router = express.Router();

router.get("/products", getAllProducts );
router.get("/products/:id", getProduct);
router.post("/product", createProdcut );
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;