import { Router } from "express";
import productCtrl from "../controllers/products.controllers";

const routerProducts = Router();

routerProducts
  .route("/products")
  .post(productCtrl.createProduct)
  .get(productCtrl.listProducts);

routerProducts
  .route("/products/:id")
  .get(productCtrl.obtainProduct)
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);

routerProducts.route("/products/:id/get").get(productCtrl.getProduct)

export default routerProducts;
