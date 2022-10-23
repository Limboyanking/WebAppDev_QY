/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

var express = require('express');
var router = express.Router();

let businessContactController = require('../controllers/businessContact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}


/* GET list of items */
router.get('/list', businessContactController.businessContactList);

// Routers for edit
router.get('/edit/:id', requireAuth, businessContactController.displayEditPage);
router.post('/edit/:id', requireAuth, businessContactController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, businessContactController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, businessContactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, businessContactController.processAddPage);

module.exports = router;