const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// ROUTES
var routes = require("./routes/api");
app.use("/api", routes);

const port = config.get("port");

app.listen(port, () => {
  console.log(`Running http://localhost:${port}`);
});
