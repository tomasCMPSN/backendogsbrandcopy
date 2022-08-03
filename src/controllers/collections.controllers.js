import { validateCollectionName } from "../helpers/ValidateFields";
import Collection from "../models/collection";
const collectionCtrl = {};

collectionCtrl.listCollections = (req, res) => {
  res.send("get route");
};

collectionCtrl.createCollection = async (req, res) => {
    console.log(req.body);
  if (!validateCollectionName(req.body.title)) {
    res.status(404).json({
      msg: "Error at validate",
    });
    return;
  }
  const collectionNew = new Collection({
    title: req.body.title,
    products: [  ],
  });
  await collectionNew.save();
  res.status(201).json({
    msg: "New collection added",
  });
};

export default collectionCtrl;
