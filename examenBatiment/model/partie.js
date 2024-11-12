const mongo = require("mongoose");
const Schema = mongo.Schema;
const Partie = new Schema({
  nom: String,
  joueur_1: String,
  joueur_2: String,
  etat: String,
});
module.exports = mongo.model("partie", Partie);
