// Requiring our dependencies 

var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var axios = require("axios");
var morgan = require('morgan');
var request = require("request");


var express = require("express");
var app = express ();


// app.use(logger("dev"));
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );

// Path for Public Folder
app.use(express.static(process.cwd() + "/public"));

mongoose.connect("mongodb://localhost/scraped_news");
var db = mongoose.connection;

// Error incase mongoose dosent connect or if it does
db.on("error", console.error.bind( console, "connection fail"));
db.once("open", function(){
    console.log("Connected to Mongoose");
});



// Setting app engine 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/Scrapin-App";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

var routes = require("./controller/controller.js");
app.use("/", routes);
//Create localhost port
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});


// Setting up Port
// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//     console.log("Listening on " + " http://localhost:3000");
// });


