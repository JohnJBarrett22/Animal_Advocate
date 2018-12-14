//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var server = app.listen(1337);
var io = require("socket.io")(server);

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

//Sockets
io.on("connection", (socket)=>{
    console.log("~New connection made~")

    socket.on("join", function(data){
        socket.join(data.room);
        console.log(data.user + "joined the room: " + data.room);
        socket.broadcast.to(data.room).emit("New user joined", {user: data.user, message: "has joined this room."});
    })

    socket.on("leave", function(data){
        console.log(data.user + "left the room: " + data.room);
        socket.broadcast.to(data.room).emit("left room", {user: data.user, message: "has left this room."});
        socket.leave(data.room);
    })
});

//Port
// app.listen(1337, function(){
//     console.log("Listening on port: 1337");
// });