/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

// create a reference to the model
let businessContactModel = require('../models/businessContact');

module.exports.businessContactList = function(req, res, next) {  
    businessContactModel.find((err, businessContactList) => {
        console.log(businessContactList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessContact/list', {
                title: 'businessContact List', 
                businessContactList: businessContactList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    businessContactModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businessContact/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    

    let id = req.params.id

    let updatedItem = businessContactModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });

    businessContactModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/businessContact/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    businessContactModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/businessContact/list');
        }
    });

}


module.exports.displayAddPage = (req, res, next) => {

    let newItem = businessContactModel();

    res.render('businessContact/add_edit', {
        title: 'Add new Contact',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = businessContactModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });

    businessContactModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/businessContact/list');
        }
    });
    
}