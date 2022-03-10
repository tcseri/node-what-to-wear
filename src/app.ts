import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { wearRouter } from "./routes/wear";
import bodyParser from "body-parser";

const app = express();
const port = process.env.SERVER_PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/jsonI
app.use(bodyParser.json());

// routers
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
  console.log(`Wear app listening at http://localhost:${port}`);
});
