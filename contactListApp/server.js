//declaring express on the server.js file
var express = require("express");
var app = express();


var mongoose = require('mongoose');


mongoose.connect( 'mongodb://localhost/contactList', function (err) {
 if (err) console.log('Error: Failed to connect to mongoose!', err);
 else console.log('Connected to mongodb!');
});

//mongoose.connect('mongodb://127.0.0.1:27017/test/contactList');﻿

var contactListSchema = mongoose.Schema({
name: String,
email: String,
number: String
}, {collection: 'contactList'});

var contactList = mongoose.model('ContactList', contactListSchema);﻿

app.get("/contactList", function(req, res) {
  contactList.find({}, function(err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

//static is html, csss, img files
app.use(express.static(__dirname + "/public"));


//settting local lost for the app
app.listen(3000);
//sending to the console
console.log("Server running on port 3000");
