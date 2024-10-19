var express = require("express");
var http = require("http");
var bodyParser=require("body-parser")
var indexRouter=require('./Routes/index')
//connection to database
var mongo=require("mongoose")
var config=require("./Config/db.json")
mongo.connect(config.url)
.then(()=>console.log("database connected"))
.catch(()=>console.log("database not connected "))
/*************************************** */

var app = express();
app.use(bodyParser.json())
app.use("/index",indexRouter)

const server = http.createServer(app, console.log("server run"));
server.listen(3000);

module.exports=app;