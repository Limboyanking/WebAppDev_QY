/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/1
 */

const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/',(req,res) => {
  const data = require('../pages/landing.json')
  res.render("landing",{data})
})

module.exports = router;