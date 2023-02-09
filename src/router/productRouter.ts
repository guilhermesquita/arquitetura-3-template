import express from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ProductController } from "../controller/ProductController"
import { ProductDTO } from "../dtos/ProductDTO"

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductDTO(),
    new ProductBusiness()
)

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProduct)
productRouter.put("/:id", productController.editProduct)
productRouter.delete("/:id", productController.deleteProduct)
