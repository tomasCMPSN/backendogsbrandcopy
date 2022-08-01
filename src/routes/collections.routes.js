import { Router } from "express";
import collectionCtrl from "../controllers/collections.controllers";

const routerCollections = Router();

routerCollections
  .route("/collections")
  .get(collectionCtrl.listCollections)
  .post(collectionCtrl.createCollection);

export default routerCollections;
