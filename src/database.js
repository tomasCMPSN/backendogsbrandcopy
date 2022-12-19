import mongoose from "mongoose";
require('dotenv').config()

// const url = "mongodb://localhost:27017/ogsBrandCopy"
const url = process.env.REACT_APP_API_OGSBRANDCOPY

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB Connected');
})