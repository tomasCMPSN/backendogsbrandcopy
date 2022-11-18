import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 200,
      minlength: 1,
      required: true,
    },
    price: {
      type: Number,
      maxlength: 999999,
      minlength: 1,
      required: true,
    },
    colors: {
      type: Number,
      maxlength: 3,
      minlength: 1,
      required: true,
    },
    description: {
      type: String,
      maxlength: 999999,
      minlength: 1,
      required: true,
    },
    sizesData: {
      type: Array,
      maxlength: 7,
    },
    collectionid: {
      type: mongoose.Types.ObjectId,
    },
    color1Img1: {
      type: String,
      maxlength: 400,
      minlength: 1,
      required: true,
    },
    color1Img2: {
      type: String,
      maxlength: 400,
    },
    color1Img3: {
      type: String,
      maxlength: 400,
    },
    color1Img4: {
      type: String,
      maxlength: 400,
    },
    color1Img5: {
      type: String,
      maxlength: 400,
    },
    color2Img1: {
      type: String,
      maxlength: 400,
    },
    color2Img2: {
      type: String,
      maxlength: 400,
    },
    color2Img3: {
      type: String,
      maxlength: 400,
    },
    color2Img4: {
      type: String,
      maxlength: 400,
    },
    color2Img5: {
      type: String,
      maxlength: 400,
    },
    color3Img1: {
      type: String,
      maxlength: 400,
    },
    color3Img2: {
      type: String,
      maxlength: 400,
    },
    color3Img3: {
      type: String,
      maxlength: 400,
    },
    color3Img4: {
      type: String,
      maxlength: 400,
    },
    color3Img5: {
      type: String,
      maxlength: 400,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);

export default Product;
