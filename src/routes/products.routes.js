import { Router } from "express";
import productCtrl from "../controllers/products.controllers";

const routerProducts = Router();

routerProducts.route("/products").post(productCtrl.createProduct);

routerProducts
  .route("/products/:id")
  .get(productCtrl.obtainProduct)
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);
export default routerProducts;
