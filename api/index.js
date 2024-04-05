import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouts from './routes/user.routs.js';
import authRouts from './routes/auth.routs.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("server is running on 3000 port !!");
});

app.use('/api/user',userRouts)
app.use('/api/auth',authRouts)