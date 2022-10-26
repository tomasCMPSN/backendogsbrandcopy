import { Router } from "express";
import homeDataCtrl from "../controllers/homeData.controllers";

const routerHomeData = Router();

routerHomeData
  .route("/homedata")
  .get(homeDataCtrl.listHomeData)
  .post(homeDataCtrl.createHomeData);

routerHomeData
  .route("/homedata/:id")
  .put(homeDataCtrl.updateHomeData)
  .delete(homeDataCtrl.deleteHomeData);

export default routerHomeData;
