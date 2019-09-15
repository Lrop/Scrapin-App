// Dependencies Needed

var express = require("express");
var router = express.Router; 
var path = require("path");

var request = require('request');
var cheerio = require("cheerio");

var Comment = require("../models/Comment");
var Article = require("../models/Article");