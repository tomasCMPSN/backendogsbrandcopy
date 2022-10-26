import mongoose, { Schema } from "mongoose";

const homeDataSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 1,
      maxlength: 100,
      required: true,
    },
    imgURL: {
      type: String,
      maxlength: 400,
      minlength: 1,
      required: true,
    },
    collectionid: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const HomeData = mongoose.model("homeData", homeDataSchema);

export default HomeData;
