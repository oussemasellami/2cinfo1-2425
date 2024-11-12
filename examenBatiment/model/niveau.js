const mongo = require("mongoose");
//const { boolean } = require("yup");
const Schema = mongo.Schema;
const Niveau = new Schema({
  nom: String,
  nbr_chambre: Number,
  etat_construction: Boolean,
  id_batiment: String,
});
module.exports = mongo.model("niveau", Niveau);
