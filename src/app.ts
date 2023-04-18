import express, { Express, Request, Response } from 'express';
  // Request and Response interface
import dotenv from 'dotenv';
import router from './routes/appRoutes';
import bodyParser from 'body-parser'

dotenv.config();

const app:Express = express();
// const port = process.env.PORT; // undefined
const port = 8080;
app.listen(port, ()=>{
  console.log("Server is running on port 8080");
});

app.use(bodyParser.json());
app.use("/", router);



