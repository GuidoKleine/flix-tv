const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
});

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

app.get('*', (req, res) => {
  res.send(indexHTML);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

