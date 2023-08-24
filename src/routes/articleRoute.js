const {getAllProducts, createProduct, deleteProduct, updateProduct} = require("../controllers/ProductController");
const router = require("express").Router();

router.get("/", getAllProducts)
router.post("/", createProduct)
router.delete("/:Product_id", deleteProduct)
router.put("/:Product_id", updateProduct)


module.exports = router
