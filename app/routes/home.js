/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/1
 */

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { path: "/", pageTitle: "Portfolio " });
});

router.get("/home", (req, res) => {
  res.render("home", { path: "/", pageTitle: "Portfolio " });
});

router.get("/main", (req, res) => {
  res.render("main", { path: "/main", pageTitle: "Qi Yang" });
});

router.get("/about", (req, res) => {
  res.render("about", { path: "/about", pageTitle: "About me" });
});

router.get("/projects", (req, res) => {
  res.render("projects", { path: "/projects", pageTitle: "My projects" });
});

router.get("/services", (req, res) => {
  res.render("services", { path: "/services", pageTitle: "My services" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { path: "/contact", pageTitle: "Contact me" });
});

module.exports = router;
