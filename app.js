const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// routers

/* 
model:
weatherDTO <- ami az open weathertől jön
wear <- {id, mintemp, maxtemp, name}
*/

app.use("/", (req, res) => {
  res.send("Node app is running!");
});

// error handler
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  const msg = err.message || err;
  res.status(500);
  res.send({ title: "Error van!", message: msg, stack: err.stack });
});

app.listen(port, () => {
  console.log(`todoApp app listening at http://localhost:${port}`);
});