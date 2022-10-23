/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */


let mongoose = require('mongoose');

// Create a model class
let businessContactModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        emailAddress: String
    },
    {
        collection: "businessContact"
    }
);

module.exports = mongoose.model('businessContact', businessContactModel);