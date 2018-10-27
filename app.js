"use strict";
const db = require("./models");

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("hello from container");
});

app.get("/users", async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
