var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var path = require("path");
var indexRouter = require("./Routes/index");
var joueurRouter = require("./Routes/joueur");
var{add}=require('./Controller/chatController')
//connection to database
var mongo = require("mongoose");
var config = require("./Config/db.json");
mongo
  .connect(config.url)
  .then(() => console.log("database connected"))
  .catch(() => console.log("database not connected "));
/*************************************** */

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(bodyParser.json());
app.use("/index", indexRouter);
app.use("/joueur", joueurRouter);

const server = http.createServer(app, console.log("server run"));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connecte");

  socket.on("typing", (data) => {
    console.log("notre message serveur:" + data);
    socket.broadcast.emit("typing", data);
  });
  socket.on("aaaaa", (data) => {
    console.log("notre message serveur:" + data);
    add(data);
    io.emit("aaaaa", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});

server.listen(3000);

module.exports = app;
