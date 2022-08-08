import { validateCollectionName } from "../helpers/ValidateFields";
import Collection from "../models/collection";
const collectionCtrl = {};

collectionCtrl.listCollections = async (req, res) => {
  const allCollections = await Collection.find();
  res.status(200).json(allCollections)
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

collectionCtrl.obtainCollection = async (req, res) => {
  const findCollection = await Collection.findById(req.params.id);
  res.status(200).json(findCollection)
}

collectionCtrl.updateCollection = async (req, res) => {
  await Collection.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json({
    msg: "Collection Updated"
  })
}

export default collectionCtrl;
