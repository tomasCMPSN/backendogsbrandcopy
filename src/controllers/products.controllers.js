import Product from "../models/product";
import {
  validateCollectionName,
  validateColor,
  validatePrice,
} from "../helpers/ValidateFields";
import mongoose from "mongoose";

const productCtrl = {};

productCtrl.listProducts = async (req, res) => {
  const allProduts = await Product.find();
  res.status(200).json(allProduts)
}

productCtrl.getProduct = async (req, res) => {
  const findProduct = await Product.findById(req.params.id)
  res.status(200).json(findProduct)
}

productCtrl.createProduct = async (req, res) => {
  if (
    !validateCollectionName(req.body.name) ||
    !validatePrice(req.body.price) ||
    !validateColor(req.body.colors)
  ) {
    res.status(404).json({
        msg: "Error at validate"
    })
    return;
  }
  const productNew = new Product({
    name: req.body.name,
    price: req.body.price,
    colors: req.body.colors,
    collectionid: req.body.collectionid,
    color1Img1: req.body.color1Img1,
    color1Img2: req.body.color1Img2,
    color1Img3: req.body.color1Img3,
    color1Img4: req.body.color1Img4,
    color1Img5: req.body.color1Img5,
    color2Img1: req.body.color2Img1,
    color2Img2: req.body.color2Img2,
    color2Img3: req.body.color2Img3,
    color2Img4: req.body.color2Img4,
    color2Img5: req.body.color2Img5,
    color3Img1: req.body.color3Img1,
    color3Img2: req.body.color3Img2,
    color3Img3: req.body.color3Img3,
    color3Img4: req.body.color3Img4,
    color3Img5: req.body.color3Img5,
  })
  await productNew.save();
  res.status(201).json({
    msg: "New product added"
  })
};

productCtrl.obtainProduct = async (req, res) => {
  const result = await Product.aggregate([
    {
      $lookup:{
        from: "collections",
        localField: "collectionid",
        foreignField: "_id",
        as: "fromCollection"
      }
    },
    { $unwind: "$fromCollection"},
    { $match: { collectionid: mongoose.Types.ObjectId(req.params.id) } }
  ])
  res.status(200).json(result);
}

productCtrl.updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    msg: "Product Updated",
  });
};

productCtrl.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    msg: "Product deleted",
  })
};

export default productCtrl;
