/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/home');

/* GET home page. */
router.get('/', controlerIndex.home);

/* GET home page. */
router.get('/home', controlerIndex.home);

/* GET main page. */
router.get('/main', controlerIndex.main);

/* GET About page. */
router.get('/about', controlerIndex.about);

/* GET Projects page. */
router.get('/projects', controlerIndex.projects);

/* GET Services page. */
router.get('/services', controlerIndex.services);

/* GET Services page. */
router.get('/contact', controlerIndex.contact);

module.exports = router;
