import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import {wearRouter} from "./routes/wear"

// Init configuration form .env file
dotenv.config()

const app = express();
const port = process.env.SERVER_PORT;

// const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json());

// routers
// const wearRouer = require("./routes/wear");
app.use("/wear", wearRouter);

app.use("/", (req, res) => {
  res.send("Node-wear app is running!");
});

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  const msg = err.message || err;
  res.status(500);
  res.send({ message: msg, stack: err.stack });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Wear app listening at http://localhost:${port}`);
});
