import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv" ;
import "./db/dbConnect.js";
import details from "./routes/detailsRoute.js";

const app = express();
app.use(cors()) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world!");
})

app.use('/api/v1/details', details) ;

// server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("Server running on port: " + PORT);
})