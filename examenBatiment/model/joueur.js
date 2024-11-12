const mongo = require("mongoose");
const Schema = mongo.Schema;
const Joueur = new Schema({
  pseudo: String,
  sante: Number,
  score: Number,
});
module.exports = mongo.model("joueur", Joueur);
