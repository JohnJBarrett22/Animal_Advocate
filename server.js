//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");

//Config
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());
app.use(session({
    secret: "mooMoomoo",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

//Database
mongoose.connect("mongodb://localhost/animal_advocate");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(1337, function(){
    console.log("Listening on part: 1337");
});