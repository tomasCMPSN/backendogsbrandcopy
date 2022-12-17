require('dotenv').config()

import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path';
import routerCollections from "./routes/collections.routes";
import routerProducts from "./routes/products.routes";
import './database'
import routerHomeData from "./routes/homeData.routes";

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("using port " + app.get("port"));
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'../public')));

app.use('/apiogsbrandcopy', routerCollections);
app.use('/apiogsbrandcopy', routerProducts);
app.use('/apiogsbrandcopy', routerHomeData);

const userRoutes = require('./routes/users.routes')
app.use('/apiogsbrandcopy', userRoutes)
