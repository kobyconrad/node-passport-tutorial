const express = require("express");

const app = express();

app.set("view-engine", "ejs");

/// Our Routes
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Koby" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {});
///

app.listen(3000);
