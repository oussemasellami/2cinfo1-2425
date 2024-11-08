var express = require("express");
var route = express.Router();
var usercontroller = require("../Controller/userController");
var validate=require('../Middl/validate')
route.get("/show", function (req, res) {
  console.log("notre class 2cinfo1");
});

route.get("/add/:username/:email/:cin", function (req, res) {
  new User({
    username: req.params.username,
    email: req.params.email,
    cin: req.params.cin,
  }).save();
  res.send("test");
});

route.post("/add",validate, usercontroller.add);

route.get("/showuser", usercontroller.show);

route.get("/showuser/:id", usercontroller.showbyid);

route.get("/showusername/:name", usercontroller.showbyname);

route.put("/update/:id", usercontroller.updateuser);

route.delete("/delete/:id", usercontroller.deleteuser);


route.get("/chatroute", function (req, res) {
  res.render('chat')//nom page twig
});

module.exports = route;
