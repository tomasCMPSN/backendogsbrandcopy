import mongoose, { Schema } from "mongoose";

const collectionSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 1,
      maxlength: 100,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

const Collection = mongoose.model("collection", collectionSchema);

export default Collection;
