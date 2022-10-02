/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/1
 */

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const router = require("./app/routes/home");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./public/views");
app.set("port", PORT);


app.use(express.static("public"));
// app.get("/public", express.static("public"));

app.use("/", router);


app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(app.get("port"), () => {
  console.log("Server is listening...");
});
