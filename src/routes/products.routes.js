import { Router } from "express";
import productCtrl from "../controllers/products.controllers";

const routerProducts = Router();

routerProducts.route("/products").post(productCtrl.createProduct);

routerProducts.route("/products/:id").get(productCtrl.obtainProduct);
export default routerProducts;
