/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

// In real project, never expose your credential in your code.
let atlasDB = "mongodb+srv://eric:eric@cluster0.dosf3fq.mongodb.net/products?retryWrites=true&w=majority";
let localDB = "mongodb://localhost:27017/library";

let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}