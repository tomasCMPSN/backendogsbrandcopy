import mongoose from "mongoose";

const url = "mongodb://localhost:27017/ogsBrandCopy"

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB Connected');
})