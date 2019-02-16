//Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const server = app.listen(1337);
const io = require("socket.io")(server);
const TWO_HOURS = 1000 * 60 * 60 * 2
const {
    PORT = 1337,
    SESSION_NAME = 'sid',
    SESSION_SECRET = '1DoG2CaT3PeTs!',
    SESSION_LIFETIME = TWO_HOURS
} = process.env

//Config
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());
app.use(session({
    name: SESSION_NAME,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: SESSION_LIFETIME,
        sameSite: true
    }
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
        console.log("~" + data.user + " joined the room: " + data.room + "~");
        socket.broadcast.to(data.room).emit("userJoined", {user: data.user, message: "joined this room."});
    })

    socket.on("leave", function(data){
        console.log("~" + data.user + " left the room: " + data.room + "~");
        socket.broadcast.to(data.room).emit("leftRoom", {user: data.user, message: "left this room."});
        socket.leave(data.room);
    })

    socket.on("msg", function(data){
        io.in(data.room).emit("newMsg", {user: data.user, message: data.message});
    })
});

//Port
// app.listen(PORT, function(){
//     console.log("Listening on port: 1337");
// });