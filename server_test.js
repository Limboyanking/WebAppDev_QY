/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/1
 */

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const rootDir = require("./utils/path");
const router = require("./app/routes/test");
const app = express();
const PORT = process.env.PORT || 3000;


// Static Files
app.use(express.static("public"));
// app.get("/public", express.static("public"));
app.use('/css',express.static(rootDir + 'public/css'));
app.use('/img',express.static(rootDir + 'public/img'));
app.use('/hs',express.static(rootDir + 'public/js'));


// Templating Engine
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.set("port", PORT);


// Router
app.use("/", router);


app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "Page not found" });
});
app.listen(app.get("port"), () => {
    console.log("Server is listening...");
});


module.exports = router;

