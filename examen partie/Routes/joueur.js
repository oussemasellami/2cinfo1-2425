var express = require("express");
var route = express.Router();
const joueurController = require("../Controller/joueurController");

route.post("/addjoueur", joueurController.addjoueur);
route.get("/getalljoueur", joueurController.showjoueur);
route.get("/getjoueur/:id", joueurController.showbyidjoueur);
route.delete("/deletejoueur/:id", joueurController.deletejoueur);

route.put("/attaque/:id1/:id2", joueurController.attaque);
route.post("/newpartie/:id1/:id2", joueurController.addpartie);
module.exports = route;
