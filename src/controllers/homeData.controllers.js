import HomeData from "../models/homeData";
import { validateCollectionName, validateURL } from "../helpers/ValidateFields";
import mongoose from "mongoose";

const homeDataCtrl = {};

homeDataCtrl.listHomeData = async (req, res) => {
  const AllHomeData = await HomeData.find();
  res.status(200).json(AllHomeData);
};

homeDataCtrl.createHomeData = async (req, res) => {
  console.log(req.body);
  if (!validateCollectionName(req.body.title)) {
    res.status(404).json({
      msg: "Error at validate.",
    });
    return;
  }
  const homeDataNew = new HomeData({
    title: req.body.title,
    imgURL: req.body.imgURL,
    collectionid: req.body.collectionid,
  });
  await homeDataNew.save();
  res.status(201).json({
    msg: "New home data added.",
  });
};

homeDataCtrl.obtainHomeData = async (req, res) => {
  const findHomeData = await HomeData.findById(req.params.id);
  res.status(200).json(findHomeData);
};

homeDataCtrl.updateHomeData = async (req, res) => {
  await HomeData.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    msg: "Home data updated.",
  });
};

homeDataCtrl.deleteHomeData = async (req, res) => {
  await HomeData.findByIdAndDelete(req.params.id);
  res.status(200).json({
    msg: "Home data deleted.",
  });
};

export default homeDataCtrl
