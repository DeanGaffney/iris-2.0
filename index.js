const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");

const { User, Schema, SchemaField } = require("./sequelize");

const app = express();

app.use(bodyParser.json());

app.post("/api/users", (req, res) => {
  User.create(req.body).then(user => res.json(user));
});

app.get("/api/users", (req, res) => {
  User.findAll().then(users => res.json(users));
});

const port = config.get("port");

app.listen(port, () => {
  console.log(`Running http://localhost:${port}`);
});
