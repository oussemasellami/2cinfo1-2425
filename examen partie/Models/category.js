var mongo = require("mongoose");
const Schema = mongo.Schema;
const Category = new Schema({
  username: String,
  email: String,
  cin: Number,
});

module.exports = mongo.model("category", Category);
