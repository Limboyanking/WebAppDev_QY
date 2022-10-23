/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

// the html is needing the path
var path = require("path");

  exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('home', {
        path, 
        title: 'Portfolio',
        userName: req.user ? req.user.username : ''
    });
  };
  
  exports.main = function(req, res, next) {
    res.render('main', { 
        path,
        title: 'Qi Yang',
        userName: req.user ? req.user.username : ''
     });
  }
  
  exports.about = function(req, res, next) {
    res.render('about', { 
        path,
        title: 'About me',
        userName: req.user ? req.user.username : ''
     });
  }

  exports.projects = function(req, res, next) {
    res.render('projects', { 
        path,
        title: 'My projects',
        userName: req.user ? req.user.username : ''
     });
  }

  exports.services = function(req, res, next) {
    res.render('services', { 
        path,
        title: 'My services',
        userName: req.user ? req.user.username : ''
     });
  }

  exports.contact = function(req, res, next) {
    res.render('contact', { 
       path,  
       title: 'Contact me',
       userName: req.user ? req.user.username : '' 
    });
  }

  