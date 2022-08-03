import mongoose, {Schema} from "mongoose";

const collectionSchema = new Schema({
    title:{
        type: String,
        minlength: 1,
        maxlength: 100,
        required:true
    },
    products:[  ],
});

const Collection = mongoose.model('collection', collectionSchema);

export default Collection