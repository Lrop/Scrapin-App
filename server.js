// Requiring our dependencies 


var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var axios = require("axios");
var morgan = require('morgan')


// app.use (logger("dev"));
// app.use (
//     bodyParser.urlencoded({
//         extended : false
//     })

// )

var app = express ();


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var port = process.env.PORT || 3000;
app.listen(port, function () {
    // console.log("Listening on Port" + port);
    console.log("Listening on " + " http://localhost:3000");


});



