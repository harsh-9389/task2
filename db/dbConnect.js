import mongoose from 'mongoose'
import * as dotenv from "dotenv" ;
dotenv.config();

async function dbConnect() {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('database connected successfully.');
  }).catch(err => {
    console.error('error in database connection', err);
  });
}

dbConnect();